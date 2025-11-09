import { mkdir, writeFile } from "node:fs/promises";
import https from "node:https";
import path from "node:path";
import { fileURLToPath } from "node:url";

const BASE_URL = "https://overwatch.fandom.com";
const STADIUM_ITEMS_URL = `${BASE_URL}/wiki/Stadium/Items?action=raw`;
const HERO_TEMPLATE_URL = `${BASE_URL}/wiki/Template:Heroes?action=raw`;

const ROOT_DIR = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const SNAPSHOT_DIR = path.join(ROOT_DIR, "snapshots");
const HERO_SNAPSHOT_DIR = path.join(SNAPSHOT_DIR, "heroes");

async function ensureDir(dir: string) {
  await mkdir(dir, { recursive: true });
}

function fetchText(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.headers.location) {
          fetchText(res.headers.location).then(resolve).catch(reject);
          return;
        }
        if (res.statusCode && res.statusCode >= 400) {
          reject(new Error(`Request failed for ${url} with status ${res.statusCode}`));
          return;
        }
        const chunks: Buffer[] = [];
        res.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
        res.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
      })
      .on("error", reject);
  });
}

function parseHeroNames(template: string): string[] {
  const heroPattern = /\{\{\s*Heroes\/Item\|([^}|]+)(?:\|[^}]*)?}}/g;
  const names: string[] = [];
  const seen = new Set<string>();
  let match: RegExpExecArray | null;
  while ((match = heroPattern.exec(template))) {
    const name = match[1].trim();
    if (!name || seen.has(name)) continue;
    seen.add(name);
    names.push(name);
  }
  return names;
}

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function saveSnapshot(filename: string, contents: string) {
  const fullPath = path.join(SNAPSHOT_DIR, filename);
  await ensureDir(path.dirname(fullPath));
  await writeFile(fullPath, contents, "utf-8");
  console.log(`Saved ${filename} (${contents.length} bytes)`);
}

async function main() {
  await ensureDir(SNAPSHOT_DIR);

  const [stadiumRaw, heroTemplateRaw] = await Promise.all([
    fetchText(STADIUM_ITEMS_URL),
    fetchText(HERO_TEMPLATE_URL),
  ]);

  await saveSnapshot("stadium-items.raw", stadiumRaw);
  await saveSnapshot("template-heroes.raw", heroTemplateRaw);

  const heroNames = parseHeroNames(heroTemplateRaw);
  if (!heroNames.length) {
    console.warn("No hero names parsed from template; skipping hero snapshot fetch.");
    return;
  }

  await ensureDir(HERO_SNAPSHOT_DIR);

  const heroIndex: { name: string; slug: string }[] = [];

  for (const heroName of heroNames) {
    const slug = slugify(heroName);
    const encoded = heroName.replace(/ /g, "_");
    const url = `${BASE_URL}/wiki/${encodeURIComponent(encoded)}/Stadium?action=raw`;
    try {
      const contents = await fetchText(url);
      const heroPath = path.join(HERO_SNAPSHOT_DIR, `${slug}.raw`);
      await writeFile(heroPath, contents, "utf-8");
      heroIndex.push({ name: heroName, slug });
      console.log(`Saved hero snapshot for ${heroName}`);
    } catch (error) {
      console.warn(`Failed to fetch hero snapshot for ${heroName}:`, (error as Error).message);
    }
  }

  await writeFile(path.join(SNAPSHOT_DIR, "heroes.json"), JSON.stringify(heroIndex, null, 2), "utf-8");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
