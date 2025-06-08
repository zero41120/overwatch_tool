import type { Item, Attribute } from '../types';

/**
 * Filter attributes to hide hero specific ones not matching the current hero.
 * @param item The item containing attributes.
 * @param hero Currently selected hero.
 * @param heroes List of all hero names.
 */
export function relevantAttributes(item: Item, hero: string, heroes: string[]): Attribute[] {
  return item.attributes.filter(a => !heroes.includes(a.type) || a.type === hero);
}
