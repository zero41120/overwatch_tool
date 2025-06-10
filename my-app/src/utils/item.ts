export function sortItemsByRarityAndName<ItemType extends { rarity: 'common' | 'rare' | 'epic'; name: string }>(a: ItemType, b: ItemType) {
  const order: Record<'common' | 'rare' | 'epic', number> = {
    common: 0,
    rare: 1,
    epic: 2
  };
  const diff = order[a.rarity] - order[b.rarity];
  if (diff !== 0) return diff;
  return a.name.localeCompare(b.name);
}

