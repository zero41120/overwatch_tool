import { ALL_HEROES, NO_HERO } from "../types";
import type { Item } from "../types";

export function attributeValueToLabel(value: string): string {
  const map: Record<string, string> = {
    ALS: "Ability Life Steal",
    AP: "Ability Power",
    AS: "Attack Speed",
    Armor: "Armor",
    CR: "Cooldown Reduction",
    Health: "Health",
    "Knockback Resist": "Knockback Resistance",
    MA: "Max Ammo",
    MD: "Melee Damage",
    MS: "Movement Speed",
    RS: "Reload Speed",
    Shields: "Shields",
    WP: "Weapon Power",
    WPLS: "Weapon Life Steal",
  };
  return map[value] || value;
}

const RESERVED_ATTRS = new Set(["description", "Editor's Note"]);
const PRIORITY = ["WP", "AP", "AS", "Health", "Armor", "Shields"];

function collectTypesAndCounts(items: Item[]) {
  const types = new Set<string>();
  const counts = new Map<string, number>();
  items.forEach((it) => {
    it.attributes.forEach((attr) => {
      if (RESERVED_ATTRS.has(attr.type)) return;
      types.add(attr.type);
      counts.set(attr.type, (counts.get(attr.type) ?? 0) + 1);
    });
  });
  return { types, counts };
}

export function collectAttributeTypes(items: Item[]): string[] {
  const { types, counts } = collectTypesAndCounts(items);
  return sortAttributesWithCounts(types, counts);
}

function filterItemsForHero(items: Item[], hero: string) {
  return items.filter((it) => {
    if (hero === ALL_HEROES) return true;
    if (hero === NO_HERO) return !it.character;
    return !it.character || it.character === hero;
  });
}

export function collectAttributeTypesForHero(items: Item[], hero: string): string[] {
  const allowed = filterItemsForHero(items, hero);
  const { types, counts } = collectTypesAndCounts(allowed);
  return sortAttributesWithCounts(types, counts);
}

export function collectAttributeCountsForHero(items: Item[], hero: string): Record<string, number> {
  const allowed = filterItemsForHero(items, hero);
  const { counts } = collectTypesAndCounts(allowed);
  const sortedKeys = sortAttributesWithCounts(counts.keys(), counts);
  const ordered: Record<string, number> = {};
  sortedKeys.forEach((key) => {
    ordered[key] = counts.get(key) ?? 0;
  });
  return ordered;
}

export function sortAttributes(a: string, b: string) {
  const aIdx = PRIORITY.indexOf(a);
  const bIdx = PRIORITY.indexOf(b);
  if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx;
  if (aIdx !== -1) return -1;
  if (bIdx !== -1) return 1;
  return a.localeCompare(b);
}

export function sortAttributesWithCounts(
  types: Iterable<string>,
  counts: Map<string, number> | Record<string, number>,
): string[] {
  const countLookup = counts instanceof Map ? (key: string) => counts.get(key) ?? 0 : (key: string) => counts[key] ?? 0;
  return Array.from(types).sort((a, b) => {
    const pa = PRIORITY.indexOf(a);
    const pb = PRIORITY.indexOf(b);
    if (pa !== -1 && pb !== -1 && pa !== pb) return pa - pb;
    if (pa !== pb) {
      if (pa !== -1) return -1;
      if (pb !== -1) return 1;
    }
    const ca = countLookup(a);
    const cb = countLookup(b);
    if (ca !== cb) return cb - ca;
    return a.localeCompare(b);
  });
}
