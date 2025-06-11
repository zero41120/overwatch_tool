import { aggregate, scoreFromMap, rarityColor, meetsMinGroups } from '../optimizer';
import { attributeValueToLabel, sortAttributes } from '../attribute';
import type { Item, WeightRow, MinAttrGroup } from '../../types';

describe('optimizer utils', () => {
  test('aggregate sums attributes correctly', () => {
    const items: Item[] = [
      { name: 'A', attributes: [{ type: 'AP', value: '5' }], cost: 0, tab: 'weapon', rarity: 'common' },
      { name: 'B', attributes: [{ type: 'AP', value: '3' }, { type: 'WP', value: '2' }], cost: 0, tab: 'weapon', rarity: 'common' }
    ];
    const map = aggregate(items);
    expect(map.get('AP')).toBe(8);
    expect(map.get('WP')).toBe(2);
  });

  test('scoreFromMap multiplies weights', () => {
    const map = new Map<string, number>([['AP', 5], ['WP', 10]]);
    const weights: WeightRow[] = [
      { type: 'AP', weight: 1.5 },
      { type: 'WP', weight: 2 }
    ];
    expect(scoreFromMap(map, weights)).toBeCloseTo(27.5);
  });

  test('rarityColor returns expected color', () => {
    expect(rarityColor('common')).toBe('#17a631');
    expect(rarityColor('rare')).toBe('#217dbe');
    expect(rarityColor('epic')).toBe('#8727d6');
    // @ts-expect-error testing default case
    expect(rarityColor('legendary')).toBe('black');
  });

  test('meetsMinGroups validates totals', () => {
    const items: Item[] = [
      { name: 'A', attributes: [{ type: 'AP', value: '5' }], cost: 0, tab: 'w', rarity: 'common' },
      { name: 'B', attributes: [{ type: 'WP', value: '3' }], cost: 0, tab: 'w', rarity: 'common' },
    ];
    const groups: MinAttrGroup[] = [{ attrs: ['AP', 'WP'], value: 8 }];
    expect(meetsMinGroups(items, groups)).toBe(true);
    groups[0].value = 9;
    expect(meetsMinGroups(items, groups)).toBe(false);
  });
});

describe('attribute utils', () => {
  test('attributeValueToLabel maps codes', () => {
    expect(attributeValueToLabel('ALS')).toBe('Ability Life Steal');
    expect(attributeValueToLabel('Unknown')).toBe('Unknown');
  });

  test('sortAttributes prioritizes WP/AP/AS', () => {
    const arr = ['Health', 'AP', 'WP'];
    const sorted = [...arr].sort(sortAttributes);
    expect(sorted).toEqual(['WP', 'AP', 'Health']);
  });
});
