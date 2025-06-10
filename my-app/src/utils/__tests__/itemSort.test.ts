import { sortItemsByRarityAndName } from '../item';

interface Item { name: string; rarity: 'common' | 'rare' | 'epic'; }

describe('sortItemsByRarityAndName', () => {
  test('sorts by rarity then name', () => {
    const items: Item[] = [
      { name: 'Zeta', rarity: 'rare' },
      { name: 'Alpha', rarity: 'common' },
      { name: 'Beta', rarity: 'common' },
      { name: 'Gamma', rarity: 'epic' },
    ];
    const sorted = [...items].sort(sortItemsByRarityAndName);
    expect(sorted.map(i => i.name)).toEqual(['Alpha', 'Beta', 'Zeta', 'Gamma']);
  });
});

