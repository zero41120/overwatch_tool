export const KEY = "localOverrides";

import type { Attribute, ItemOverride } from "../types";

export function loadLocalOverrides(): Record<string, ItemOverride> {
  return JSON.parse(localStorage.getItem(KEY) || "{}");
}

export function saveLocalOverride(
  item: string,
  hero: string | undefined,
  attrs: Attribute[],
) {
  const data = loadLocalOverrides();
  if (!data[item]) data[item] = {};
  if (hero) data[item][hero] = attrs;
  else data[item].attributes = attrs;
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function deleteLocalOverride(item: string, hero?: string) {
  const data = loadLocalOverrides();
  const entry = data[item];
  if (!entry) return;
  if (hero) delete entry[hero];
  else delete entry.attributes;
  if (Object.keys(entry).length === 0) delete data[item];
  localStorage.setItem(KEY, JSON.stringify(data));
}
