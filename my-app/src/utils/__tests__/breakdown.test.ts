import type { MinAttrGroup, WeightRow } from '../../types';
import { buildBreakdown } from '../utils';

test('buildBreakdown adds min attributes', () => {
  const map = new Map<string, number>([
    ['AP', 5],
    ['WP', 3],
  ]);
  const weights: WeightRow[] = [{ type: 'AP', weight: 1 }];
  const groups: MinAttrGroup[] = [{ attrs: ['WP'], value: 5 }];
  const rows = buildBreakdown(map, weights, true, groups);
  expect(rows).toEqual([
    { type: 'AP', sum: 5, contrib: 5 },
    { type: 'WP', sum: 3, contrib: 0 },
  ]);
});

test('buildBreakdown ignores groups when disabled', () => {
  const map = new Map<string, number>([
    ['AP', 5],
    ['WP', 3],
  ]);
  const weights: WeightRow[] = [{ type: 'AP', weight: 1 }];
  const groups: MinAttrGroup[] = [{ attrs: ['WP'], value: 5 }];
  const rows = buildBreakdown(map, weights, false, groups);
  expect(rows).toEqual([{ type: 'AP', sum: 5, contrib: 5 }]);
});
