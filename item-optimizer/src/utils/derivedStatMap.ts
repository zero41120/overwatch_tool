import type { Item } from "../types";
import { parseNumeric } from "./numberUtils";

const IGNORED_ATTR_TYPES = new Set(["description", "Editor's Note"]);

export function buildDerivedStatMap(items: Item[]): Map<string, number> {
  const map = new Map<string, number>();
  items.forEach((item) => {
    item.attributes.forEach((attribute) => {
      if (IGNORED_ATTR_TYPES.has(attribute.type)) return;
      const value = parseNumeric(attribute.value);
      map.set(attribute.type, (map.get(attribute.type) ?? 0) + value);
    });
  });
  return map;
}
