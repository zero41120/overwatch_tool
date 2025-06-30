export const STORAGE_KEY = "itemOverrides";

export interface ItemOverrideEntry {
  cost?: number;
  attributes?: { type: string; value: string }[];
}

export function loadOverrides(): Record<string, ItemOverrideEntry> {
  if (typeof localStorage === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, ItemOverrideEntry>) : {};
  } catch {
    return {};
  }
}

export function saveOverrides(overrides: Record<string, ItemOverrideEntry>) {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
}
