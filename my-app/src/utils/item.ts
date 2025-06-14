import type { Item } from "../types";

/**
 * Sorts items by rarity (common < rare < epic), then by name (alphabetically).
 * Matches the logic in ItemSelectModal.
 */
export function sortItemsByRarityAndName<
  ItemType extends { rarity: "common" | "rare" | "epic"; name: string },
>(a: ItemType, b: ItemType) {
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
