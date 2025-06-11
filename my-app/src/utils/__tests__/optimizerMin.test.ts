import { meetsMinGroups } from '../optimizer';
import type { Item, MinAttrGroup } from '../../types';

test('optimizer respects minimum values with equipped items', () => {
  const eq: Item[] = [
    { name: 'E', attributes: [{ type: 'AP', value: '2' }], cost: 0, tab: 'w', rarity: 'common' },
  ];
  const cand: Item[] = [
    { name: 'A', attributes: [{ type: 'AP', value: '2' }], cost: 0, tab: 'w', rarity: 'common' },
  ];
  const group: MinAttrGroup = { attrs: ['AP'], value: 5 };
  expect(meetsMinGroups([...eq, ...cand], [group])).toBe(false);
  group.value = 4;
  expect(meetsMinGroups([...eq, ...cand], [group])).toBe(true);
});
