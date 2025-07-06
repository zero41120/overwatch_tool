import type { Item } from "../types";

/**
 * Sorts items by rarity (common < rare < epic), then by name (alphabetically).
 * Matches the logic in ItemSelectModal.
 */
export function sortItemsByRarityAndName<ItemType extends { rarity: "common" | "rare" | "epic"; name: string }>(
  a: ItemType,
  b: ItemType,
) {
  const order: Record<"common" | "rare" | "epic", number> = {
    common: 0,
    rare: 1,
    epic: 2,
  };
  const diff = order[a.rarity] - order[b.rarity];
  if (diff !== 0) return diff;
  return a.name.localeCompare(b.name);
}

/**
 * Sorts items by rarity (epic > rare > common), then by tab (weapon, ability, survival), then by cost (ascending).
 * Matches the logic in ItemsOverviewTable.
 */
export function sortItemsOverview(a: Item, b: Item) {
  const rarityOrder = { epic: 3, rare: 2, common: 1 };
  const tabOrder = { weapon: 1, ability: 2, survival: 3 };
  const rarityA = rarityOrder[a.rarity as keyof typeof rarityOrder] || 0;
  const rarityB = rarityOrder[b.rarity as keyof typeof rarityOrder] || 0;
  if (rarityA !== rarityB) return rarityB - rarityA;
  const tabA = tabOrder[a.tab as keyof typeof tabOrder] || 99;
  const tabB = tabOrder[b.tab as keyof typeof tabOrder] || 99;
  if (tabA !== tabB) return tabA - tabB;
  return (a.cost || 0) - (b.cost || 0);
}

export function itemSlug(name: string) {
  // Special case: treat any name containing 'B.O.B' as 'bob'
  if (name.toLowerCase().includes('b.o.b')) name = name.replace(/b\.o\.b/i, "bob");
  return name
    .normalize("NFD") // decompose accents
    .replace(/[\u0300-\u036f]/g, "") // remove diacritics
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/-/g, "")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "");
}

const iconImports = import.meta.glob("../../data_dump/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const iconMap: Record<string, string> = {};
for (const [path, url] of Object.entries(iconImports)) {
  const name = path
    .split("/")
    .pop()!
    .replace(/\.png$/, "");
  iconMap[itemSlug(name)] = url as string;
}

export function iconUrlForName(name: string) {
  return iconMap[itemSlug(name)];
}
