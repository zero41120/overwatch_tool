import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import readline from "node:readline/promises";

import type { ItemRecord } from "../types";
import {
  buildGeneralItemRecords,
  buildHeroItemRecords,
  groupBySlug,
  mergeExistingData,
  recordDiffers,
  recordToSource,
  type HeroSnapshot,
} from "./lib/itemBuilder";
import { buildHeroPowers } from "./lib/heroPowerBuilder";
import { buildHeroMetadata } from "./lib/heroMetadataBuilder";
import type { HeroMetadata, HeroPower } from "../types";
import { slugifyName } from "./lib/textUtils";
import { imageKey, sanitizeImageUrl } from "./lib/imageUtils";
import { parseHeroRoles } from "./lib/heroRoleParser";
import heroPowerOverrides from "../heroPowerOverrides";
import {
  applyHeroPowerManualFields,
  buildHeroPowerOverrideMap,
  heroPowerKey,
} from "./lib/heroPowerOverrideUtils";
import {
  groupHeroPowerEntries,
  hasHeroPowerChanges,
  heroPowerModuleSource,
  heroPowersAggregatorSource,
  type HeroPowerEntry,
} from "./lib/heroPowerOutput";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, "..");
const SNAPSHOT_DIR = path.join(ROOT_DIR, "snapshots");
const HERO_DIR = path.join(SNAPSHOT_DIR, "heroes");
const IMAGE_DIR = path.join(SNAPSHOT_DIR, "images");
const ITEMS_DIR = path.join(ROOT_DIR, "items");
const POWERS_FILE = path.join(ROOT_DIR, "heroPowers.ts");
const HERO_POWERS_DIR = path.join(ROOT_DIR, "heroPowers");
const HEROES_FILE = path.join(ROOT_DIR, "heroMetadata.ts");

type HeroIndexEntry = {
  name: string;
  slug: string;
};

async function loadSnapshots() {
  const [stadiumRaw, heroIndexRaw] = await Promise.all([
    readFile(path.join(SNAPSHOT_DIR, "stadium-items.raw"), "utf-8"),
    readFile(path.join(SNAPSHOT_DIR, "heroes.json"), "utf-8").catch(() => "[]"),
  ]);

  const heroIndex: HeroIndexEntry[] = JSON.parse(heroIndexRaw);

  const heroes: HeroSnapshot[] = [];
  for (const entry of heroIndex) {
    try {
      const raw = await readFile(path.join(HERO_DIR, `${entry.slug}.raw`), "utf-8");
      heroes.push({ name: entry.name, slug: entry.slug, raw });
    } catch (error) {
      console.warn(`Missing snapshot for hero ${entry.name}: ${(error as Error).message}`);
    }
  }

  return { stadiumRaw, heroes };
}

async function loadExistingRecords() {
  const files = await readdir(ITEMS_DIR);
  const records: ItemRecord[] = [];
  for (const file of files) {
    if (!file.endsWith(".ts")) continue;
    const modulePath = pathToFileURL(path.join(ITEMS_DIR, file)).href;
    const mod = await import(modulePath);
    if (mod?.default) {
      records.push(mod.default as ItemRecord);
    }
  }
  return records;
}

async function loadExistingHeroPowersData(): Promise<HeroPower[]> {
  try {
    const modulePath = pathToFileURL(POWERS_FILE).href + `?v=${Date.now()}`;
    const mod = await import(modulePath);
    if (Array.isArray(mod.default)) {
      return mod.default as HeroPower[];
    }
  } catch {
    // ignore
  }
  return [];
}

async function loadImageSnapshots() {
  let files: string[] = [];
  try {
    files = await readdir(IMAGE_DIR);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return new Map<string, string>();
    }
    throw error;
  }

  const lookup = new Map<string, string>();
  for (const file of files) {
    if (!file.endsWith(".json")) continue;
    const fullPath = path.join(IMAGE_DIR, file);
    try {
      const raw = await readFile(fullPath, "utf-8");
      const parsed = JSON.parse(raw) as { title?: string; url?: string };
      if (!parsed?.url) continue;
      const key = imageKey(parsed.title || "");
      if (!key) continue;
      const url = sanitizeImageUrl(parsed.url);
      if (!url) continue;
      lookup.set(key, url);
    } catch (error) {
      console.warn(`[images] Failed to parse ${file}:`, (error as Error).message);
    }
  }

  return lookup;
}

function summarizeChanges(
  nextRecords: ItemRecord[],
  existingRecords: ItemRecord[],
) {
  const existingByName = new Map(existingRecords.map((record) => [record.item.name, record]));
  const nextByName = new Map(nextRecords.map((record) => [record.item.name, record]));

  const added: ItemRecord[] = [];
  const updated: ItemRecord[] = [];
  const removed: ItemRecord[] = [];

  for (const [name, nextRecord] of nextByName.entries()) {
    const current = existingByName.get(name);
    if (!current) {
      added.push(nextRecord);
    } else if (recordDiffers(current, nextRecord)) {
      updated.push(nextRecord);
    }
  }

  for (const [name, current] of existingByName.entries()) {
    if (!nextByName.has(name)) {
      removed.push(current);
    }
  }

  return { added, updated, removed };
}

async function confirmWrite(force: boolean) {
  if (force) return true;
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const answer = (await rl.question("Apply these changes? (y/N): ")).trim().toLowerCase();
  rl.close();
  return answer === "y" || answer === "yes";
}

async function writeRecords(records: ItemRecord[], removed: ItemRecord[]) {
  const entries = [...groupBySlug(records).entries()].sort((a, b) => a[0].localeCompare(b[0]));
  for (const [slug, record] of entries) {
    const destination = path.join(ITEMS_DIR, `${slug}.ts`);
    await writeFile(destination, recordToSource(record), "utf-8");
  }

  for (const record of removed) {
    const destination = path.join(ITEMS_DIR, `${slugifyName(record.item.name)}.ts`);
    try {
      await rm(destination);
    } catch {
      // ignore missing files
    }
  }
}

function heroMetadataSource(data: HeroMetadata[]) {
  return `import type { HeroMetadata } from "./types";

const heroMetadata: HeroMetadata[] = ${JSON.stringify(data, null, 2)};

export default heroMetadata;
`;
}

function normalizeHeroPowersData(powers: HeroPower[]) {
  return [...powers]
    .map((power) => ({
      hero: power.hero,
      name: power.name,
      description: power.description,
      affectedAbility: power.affectedAbility ?? "",
      iconUrl: power.iconUrl ?? "",
      synergyHeroes: [...(power.synergyHeroes ?? [])].sort(),
      counterHeroes: [...(power.counterHeroes ?? [])].sort(),
      antiSynergyHeroes: [...(power.antiSynergyHeroes ?? [])].sort(),
      beingCountered: [...(power.beingCountered ?? [])].sort(),
    }))
    .sort((a, b) => {
      if (a.hero === b.hero) return a.name.localeCompare(b.name);
      return a.hero.localeCompare(b.hero);
    });
}

async function writeHeroPowers(entries: HeroPowerEntry[], aggregatorSource: string, existing?: string) {
  await mkdir(HERO_POWERS_DIR, { recursive: true }).catch(() => {});
  let currentFiles: string[] = [];
  try {
    currentFiles = await readdir(HERO_POWERS_DIR);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
      throw error;
    }
  }
  const remaining = new Set(currentFiles.filter((file) => file.endsWith(".ts")));

  for (const entry of entries) {
    const destination = path.join(HERO_POWERS_DIR, `${entry.slug}.ts`);
    const source = heroPowerModuleSource(entry);
    const previous = await readFile(destination, "utf-8").catch(() => "");
    if (previous !== source) {
      await writeFile(destination, source, "utf-8");
      console.log(`[hero-powers] wrote ${entry.powers.length} powers for ${entry.hero}`);
    }
    remaining.delete(`${entry.slug}.ts`);
  }

  for (const file of remaining) {
    const destination = path.join(HERO_POWERS_DIR, file);
    await rm(destination).catch(() => {});
    console.log(`[hero-powers] removed stale module ${file}`);
  }

  const previous = existing ?? (await readFile(POWERS_FILE, "utf-8").catch(() => ""));
  if (previous === aggregatorSource) {
    console.log("[hero-powers] aggregator unchanged");
    return;
  }

  await writeFile(POWERS_FILE, aggregatorSource, "utf-8");
  console.log(`[hero-powers] wrote aggregator for ${entries.length} heroes`);
}

async function loadHeroPowerFiles() {
  const files = new Map<string, string>();
  let existing: string[] = [];
  try {
    existing = await readdir(HERO_POWERS_DIR);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return files;
    }
    throw error;
  }

  for (const file of existing) {
    if (!file.endsWith(".ts")) continue;
    const previous = await readFile(path.join(HERO_POWERS_DIR, file), "utf-8").catch(() => "");
    files.set(file, previous);
  }

  return files;
}

async function writeHeroMetadata(data: HeroMetadata[], existing?: string, precomputedSource?: string) {
  const source = precomputedSource ?? heroMetadataSource(data);
  const previous = existing ?? (await readFile(HEROES_FILE, "utf-8").catch(() => ""));
  if (previous === source) {
    console.log("[hero-metadata] no changes detected");
    return;
  }
  await writeFile(HEROES_FILE, source, "utf-8");
  console.log(`[hero-metadata] wrote ${data.length} hero entries`);
}

async function main() {
  console.log("[update-items] starting");
  const forceWrite = process.argv.includes("--yes") || process.argv.includes("-y");
  const { stadiumRaw, heroes } = await loadSnapshots();
  const heroTemplateRaw = await readFile(path.join(SNAPSHOT_DIR, "template-heroes.raw"), "utf-8").catch(() => "");
  const heroRoles = parseHeroRoles(heroTemplateRaw);
  const imageLookup = await loadImageSnapshots();
  const generalRecords = buildGeneralItemRecords(stadiumRaw, imageLookup);
  const heroRecords: ItemRecord[] = [];
  const heroPowers: HeroPower[] = [];
  const heroesWithData = new Set<string>();
  const existingHeroPowersData = await loadExistingHeroPowersData();
  const existingHeroPowerMap = new Map(
    existingHeroPowersData.map((hp) => [heroPowerKey(hp.hero, hp.name), hp]),
  );
  const manualHeroPowerOverrides = buildHeroPowerOverrideMap(heroPowerOverrides);

  for (const hero of heroes) {
    const records = buildHeroItemRecords(hero, imageLookup);
    if (records.length) {
      heroesWithData.add(hero.name);
    }
    heroRecords.push(...records);

    const powers = buildHeroPowers(hero, imageLookup);
    if (powers.length) {
      heroesWithData.add(hero.name);
    }
    powers.forEach((power) => {
      const key = heroPowerKey(power.hero, power.name);
      applyHeroPowerManualFields(power, manualHeroPowerOverrides.get(key));
      const previous = existingHeroPowerMap.get(key);
      if (previous) {
        applyHeroPowerManualFields(power, previous, { force: false });
      }
      heroPowers.push(power);
    });
  }

  const allMetadata = heroes.map((hero) => buildHeroMetadata(hero, imageLookup, heroRoles.get(hero.name)));
  const heroMetadata = allMetadata.filter((meta) => heroesWithData.has(meta.name));
  const heroPowerEntries = groupHeroPowerEntries(heroPowers);
  const heroPowerAggregatorSource = heroPowersAggregatorSource(heroPowerEntries);
  const existingHeroPowerFiles = await loadHeroPowerFiles();
  const existingHeroPowers = await readFile(POWERS_FILE, "utf-8").catch(() => "");
  const normalizedHeroPowers = normalizeHeroPowersData(heroPowers);
  const normalizedExistingHeroPowers = normalizeHeroPowersData(existingHeroPowersData);
  const heroPowerDataChanged =
    JSON.stringify(normalizedHeroPowers) !== JSON.stringify(normalizedExistingHeroPowers);
  const heroPowerChanged = hasHeroPowerChanges(
    heroPowerEntries,
    existingHeroPowerFiles,
    heroPowerAggregatorSource,
    existingHeroPowers,
    { dataEqual: !heroPowerDataChanged },
  ) || heroPowerDataChanged;
  const heroMetadataSourceText = heroMetadataSource(heroMetadata);
  const existingHeroMetadata = await readFile(HEROES_FILE, "utf-8").catch(() => "");
  const heroMetadataChanged = existingHeroMetadata !== heroMetadataSourceText;
  const generatedRecords = [...generalRecords, ...heroRecords];

  const existingRecords = await loadExistingRecords();
  const existingMap = new Map(existingRecords.map((record) => [record.item.name, record]));
  const mergedRecords = mergeExistingData(generatedRecords, existingMap);

  const { added, updated, removed } = summarizeChanges(mergedRecords, existingRecords);
  if (!added.length && !updated.length && !removed.length && !heroPowerChanged && !heroMetadataChanged) {
    console.log("No changes detected.");
    return;
  }

  console.log(`Added: ${added.length}`);
  if (added.length) {
    console.log(added.map((record) => `  + ${record.item.name}`).join("\n"));
  }

  console.log(`Updated: ${updated.length}`);
  if (updated.length) {
    console.log(updated.map((record) => `  * ${record.item.name}`).join("\n"));
  }

  console.log(`Removed: ${removed.length}`);
  if (removed.length) {
    console.log(removed.map((record) => `  - ${record.item.name}`).join("\n"));
  }

  if (heroPowerChanged) {
    const heroCount = new Set(heroPowers.map((p) => p.hero)).size;
    console.log(`[hero-powers] Ready to write ${heroPowers.length} powers across ${heroCount} heroes.`);
  }
  if (heroMetadataChanged) {
    console.log(`[hero-metadata] Ready to write portraits for ${heroMetadata.length} heroes.`);
  }

  const shouldWrite = await confirmWrite(forceWrite);
  if (!shouldWrite) {
    console.log("Aborted.");
    return;
  }

  await writeRecords(mergedRecords, removed);
  console.log("Item files updated.");
  await writeHeroPowers(heroPowerEntries, heroPowerAggregatorSource, existingHeroPowers);
  await writeHeroMetadata(heroMetadata, existingHeroMetadata, heroMetadataSourceText);
}

main().catch((error) => {
  if (error instanceof Error) {
    console.error(error.stack || error.message);
  } else {
    console.error("Unknown error", error);
  }
  process.exitCode = 1;
});
