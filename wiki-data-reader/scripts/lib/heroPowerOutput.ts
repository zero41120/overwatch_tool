import type { HeroPower } from "../../types";
import { slugifyName } from "./textUtils";

export type HeroPowerEntry = {
  hero: string;
  slug: string;
  powers: HeroPower[];
};

export function groupHeroPowerEntries(powers: HeroPower[]): HeroPowerEntry[] {
  const map = new Map<string, HeroPowerEntry>();
  for (const power of powers) {
    if (!power.hero) continue;
    const slug = slugifyName(power.hero);
    let entry = map.get(slug);
    if (!entry) {
      entry = { hero: power.hero, slug, powers: [] };
      map.set(slug, entry);
    }
    entry.powers.push(power);
  }
  return [...map.values()].sort((a, b) => a.slug.localeCompare(b.slug));
}

export function heroPowerModuleSource(entry: HeroPowerEntry) {
  return `import type { HeroPower } from "../types";

const heroPowers: HeroPower[] = ${JSON.stringify(entry.powers, null, 2)};

export default heroPowers;
`;
}

export function heroPowersAggregatorSource(entries: HeroPowerEntry[]) {
  const usedNames = new Set<string>();
  const imports: string[] = [];
  const spreads: string[] = [];

  for (const entry of entries) {
    const identifier = toIdentifier(entry.slug, usedNames);
    imports.push(`import ${identifier} from "./heroPowers/${entry.slug}";`);
    spreads.push(`  ...${identifier},`);
  }

  const importBlock = imports.length ? `\n${imports.join("\n")}` : "";
  const payload = spreads.length ? `[\n${spreads.join("\n")}\n]` : "[]";

  return `import type { HeroPower } from "./types";${importBlock}

const heroPowers: HeroPower[] = ${payload};

export default heroPowers;
`;
}

export function hasHeroPowerChanges(
  entries: HeroPowerEntry[],
  existingFiles: Map<string, string>,
  aggregatorSource: string,
  existingAggregator: string,
  options: { dataEqual?: boolean } = {},
) {
  const normalize = (value: string) => value.replace(/\r\n/g, "\n").trim();
  const dataEqual = options.dataEqual ?? false;
  const expectedFiles = new Set(entries.map((entry) => `${entry.slug}.ts`));
  const seen = new Set<string>();
  for (const entry of entries) {
    const filename = `${entry.slug}.ts`;
    if (!existingFiles.has(filename)) return true;
    const previous = existingFiles.get(filename) ?? "";
    if (!dataEqual && normalize(heroPowerModuleSource(entry)) !== normalize(previous)) return true;
    seen.add(filename);
  }

  for (const [filename] of existingFiles) {
    if (!expectedFiles.has(filename)) return true;
  }

  if (!dataEqual && normalize(aggregatorSource) !== normalize(existingAggregator)) return true;

  return false;
}

function toIdentifier(slug: string, used: Set<string>) {
  const cleaned = slug
    .split("-")
    .map((segment, index) => {
      if (index === 0) return segment;
      return segment.charAt(0).toUpperCase() + segment.slice(1);
    })
    .join("")
    .replace(/[^a-zA-Z0-9_$]/g, "");
  let candidate = cleaned && /^[a-zA-Z_$]/.test(cleaned) ? cleaned : `hero${capitalize(cleaned)}`;
  if (!candidate) candidate = "hero";
  const baseCandidate = candidate;
  let suffix = 2;
  while (used.has(candidate)) {
    candidate = `${baseCandidate}${suffix}`;
    suffix += 1;
  }
  used.add(candidate);
  return candidate;
}

function capitalize(value: string) {
  if (!value) return "";
  return value.charAt(0).toUpperCase() + value.slice(1);
}
