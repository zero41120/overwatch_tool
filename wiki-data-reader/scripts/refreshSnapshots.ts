import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import https from "node:https";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { extractHeroPortraitFilename } from "./lib/heroMetadataBuilder";
import { imageKey, normalizeImageFilename } from "./lib/imageUtils";
import { extractAbilityTemplates } from "./lib/templateParser";

const BASE_URL = "https://overwatch.fandom.com";
const STADIUM_ITEMS_URL = `${BASE_URL}/wiki/Stadium/Items?action=raw`;
const HERO_TEMPLATE_URL = `${BASE_URL}/wiki/Template:Heroes?action=raw`;

const ROOT_DIR = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const SNAPSHOT_DIR = path.join(ROOT_DIR, "snapshots");
const HERO_SNAPSHOT_DIR = path.join(SNAPSHOT_DIR, "heroes");
const IMAGE_SNAPSHOT_DIR = path.join(SNAPSHOT_DIR, "images");
const MAX_RUNTIME_MS = 120_000;
const START_TIME = Date.now();

function ensureWithinDeadline() {
  if (Date.now() - START_TIME > MAX_RUNTIME_MS) {
    throw new Error("[refresh-snapshots] exceeded 120s runtime limit");
  }
}

function remainingTimeMs() {
  return Math.max(0, MAX_RUNTIME_MS - (Date.now() - START_TIME));
}

async function ensureDir(dir: string) {
  await mkdir(dir, { recursive: true });
}

function fetchText(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      ensureWithinDeadline();
    } catch (error) {
      reject(error);
      return;
    }
    const timeout = Math.max(1000, remainingTimeMs());
    const req = https
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
    req.setTimeout(timeout, () => {
      req.destroy(new Error(`Request timed out for ${url}`));
    });
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

async function readOrFetchSnapshot(fullPath: string, url: string, label: string) {
  try {
    const contents = await readFile(fullPath, "utf-8");
    console.log(`[readOrFetchSnapshot] Read "${label}" from cache.`);
    return contents;
  } catch {
    ensureWithinDeadline();
    const contents = await fetchText(url);
    await ensureDir(path.dirname(fullPath));
    await writeFile(fullPath, contents, "utf-8");
    console.log(`[readOrFetchSnapshot] Fetched and saved "${label}" (${contents.length} bytes).`);
    return contents;
  }
}

type HeroSnapshot = {
  name: string;
  slug: string;
  raw: string;
};

type ImageRequest = {
  key: string;
  filename: string;
  title: string;
};

function imageSnapshotFilename(filename: string) {
  const extMatch = filename.match(/\.([a-z0-9]+)$/i);
  const ext = extMatch ? extMatch[1].toLowerCase() : "img";
  const base = filename.replace(/\.[^.]+$/, "");
  const slug = slugify(base) || "image";
  return `${slug}.${ext}.json`;
}

function collectImageRequests(raw: string, requests: Map<string, ImageRequest>) {
  const templates = extractAbilityTemplates(raw);
  for (const template of templates) {
    const filename = normalizeImageFilename(template.fields.ability_image);
    if (!filename) continue;
    const key = imageKey(template.fields.ability_image);
    if (!key || requests.has(key)) continue;
    const title = `File:${filename}`;
    requests.set(key, {
      key,
      filename,
      title,
    });
  }

  const portrait = extractHeroPortraitFilename(raw);
  if (portrait) {
    const imageKeyValue = imageKey(portrait);
    if (imageKeyValue && !requests.has(imageKeyValue)) {
      requests.set(imageKeyValue, {
        key: imageKeyValue,
        filename: portrait,
        title: `File:${portrait}`,
      });
    }
  }
}

async function ensureImageSnapshot(request: ImageRequest) {
  await ensureDir(IMAGE_SNAPSHOT_DIR);
  const destination = path.join(IMAGE_SNAPSHOT_DIR, imageSnapshotFilename(request.filename));
  try {
    await access(destination);
    console.log(`[images] Using cached metadata for "${request.title}".`);
    return;
  } catch {
    // continue to fetch
  }

  const apiUrl = `${BASE_URL}/api.php?action=query&titles=${encodeURIComponent(request.title)}&prop=imageinfo&iiprop=url|extmetadata&format=json`;
  try {
    console.log(`[images] Fetching metadata for "${request.title}"...`);
    ensureWithinDeadline();
    const payload = await fetchText(apiUrl);
    const parsed = JSON.parse(payload) as {
      query?: {
        pages?: Record<
          string,
          {
            title?: string;
            imageinfo?: { url?: string; descriptionurl?: string }[];
          }
        >;
      };
    };
    const pages = parsed.query?.pages;
    const page = pages ? Object.values(pages)[0] : undefined;
    const info = page?.imageinfo?.[0];
    if (!page?.title || !info?.url) {
      console.warn(`[images] Missing url for ${request.title}`);
      return;
    }
    const record = {
      title: page.title,
      url: info.url,
      descriptionurl: info.descriptionurl,
      fetchedAt: new Date().toISOString(),
    };
    await writeFile(destination, JSON.stringify(record, null, 2), "utf-8");
    console.log(`[images] Saved metadata for "${request.title}".`);
  } catch (error) {
    console.warn(`[images] Failed to fetch "${request.title}":`, (error as Error).message);
  }
}

async function main() {
  console.log("[refresh-snapshots] Starting snapshot refresh script.");
  await ensureDir(SNAPSHOT_DIR);

  const stadiumPath = path.join(SNAPSHOT_DIR, "stadium-items.raw");
  const heroTemplatePath = path.join(SNAPSHOT_DIR, "template-heroes.raw");

  console.log("[refresh-snapshots] Fetching stadium items and hero templates...");
  const [stadiumRaw, heroTemplateRaw] = await Promise.all([
    readOrFetchSnapshot(stadiumPath, STADIUM_ITEMS_URL, "stadium-items.raw"),
    readOrFetchSnapshot(heroTemplatePath, HERO_TEMPLATE_URL, "template-heroes.raw"),
  ]);

  const heroNames = parseHeroNames(heroTemplateRaw);
  console.log(`[refresh-snapshots] Parsed ${heroNames.length} hero names.`);
  if (!heroNames.length) {
    console.warn("No hero names parsed from template; skipping hero snapshot fetch.");
  }

  await ensureDir(HERO_SNAPSHOT_DIR);

  const heroSnapshots: HeroSnapshot[] = [];

  for (const heroName of heroNames) {
    console.log(`[refresh-snapshots] Processing hero snapshot for "${heroName}"...`);
    const slug = slugify(heroName);
    const encoded = heroName.replace(/ /g, "_");
    const url = `${BASE_URL}/wiki/${encodeURIComponent(encoded)}/Stadium?action=raw`;
    const heroPath = path.join(HERO_SNAPSHOT_DIR, `${slug}.raw`);
    try {
      const contents = await readOrFetchSnapshot(heroPath, url, `hero snapshot for ${heroName}`);
      heroSnapshots.push({ name: heroName, slug, raw: contents });
    } catch (error) {
      console.warn(`Failed to fetch hero snapshot for ${heroName}:`, (error as Error).message);
    }
  }

  const heroIndex = heroSnapshots.map(({ name, slug }) => ({ name, slug }));
  await writeFile(path.join(SNAPSHOT_DIR, "heroes.json"), JSON.stringify(heroIndex, null, 2), "utf-8");
  console.log(`[refresh-snapshots] Wrote ${heroSnapshots.length} hero entries to "heroes.json".`);

  const imageRequests = new Map<string, ImageRequest>();
  console.log("[refresh-snapshots] Collecting image requests from stadium data...");
  collectImageRequests(stadiumRaw, imageRequests);
  for (const hero of heroSnapshots) {
    console.log(`[refresh-snapshots] Collecting image requests from hero "${hero.name}" data...`);
    collectImageRequests(hero.raw, imageRequests);
  }

  console.log(`[refresh-snapshots] Found ${imageRequests.size} unique image requests. Fetching metadata...`);
  for (const request of imageRequests.values()) {
    await ensureImageSnapshot(request);
  }

  console.log("[refresh-snapshots] Done.");
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
