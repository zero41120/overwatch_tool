import { readFile, readdir, rm, writeFile } from "node:fs/promises";
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
} from "./lib/itemBuilder.ts";
import { slugifyName } from "./lib/textUtils.ts";
import { imageKey, sanitizeImageUrl } from "./lib/imageUtils.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, "..");
const SNAPSHOT_DIR = path.join(ROOT_DIR, "snapshots");
const HERO_DIR = path.join(SNAPSHOT_DIR, "heroes");
const IMAGE_DIR = path.join(SNAPSHOT_DIR, "images");
const ITEMS_DIR = path.join(ROOT_DIR, "items");

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

async function main() {
  console.log("[update-items] starting");
  const forceWrite = process.argv.includes("--yes") || process.argv.includes("-y");
  const { stadiumRaw, heroes } = await loadSnapshots();
  const imageLookup = await loadImageSnapshots();
  const generalRecords = buildGeneralItemRecords(stadiumRaw, imageLookup);
  const heroRecords = heroes.flatMap((hero) => buildHeroItemRecords(hero, imageLookup));
  const generatedRecords = [...generalRecords, ...heroRecords];

  const existingRecords = await loadExistingRecords();
  const existingMap = new Map(existingRecords.map((record) => [record.item.name, record]));
  const mergedRecords = mergeExistingData(generatedRecords, existingMap);

  const { added, updated, removed } = summarizeChanges(mergedRecords, existingRecords);
  if (!added.length && !updated.length && !removed.length) {
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

  const shouldWrite = await confirmWrite(forceWrite);
  if (!shouldWrite) {
    console.log("Aborted.");
    return;
  }

  await writeRecords(mergedRecords, removed);
  console.log("Item files updated.");
}

main().catch((error) => {
  if (error instanceof Error) {
    console.error(error.stack || error.message);
  } else {
    console.error("Unknown error", error);
  }
  process.exitCode = 1;
});
