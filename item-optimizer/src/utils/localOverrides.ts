export const KEY = "localOverrides";

import type { Attribute, EditorOverride, ItemOverride } from "../types";
import { normalizeOverride } from "./overrideUtils";

type StorageLike = Pick<Storage, "getItem" | "setItem" | "removeItem" | "clear" | "key" | "length">;

function createMemoryStorage(): StorageLike {
  const store = new Map<string, string>();
  return {
    get length() {
      return store.size;
    },
    clear() {
      store.clear();
    },
    getItem(key: string) {
      return store.has(key) ? store.get(key)! : null;
    },
    key(index: number) {
      return Array.from(store.keys())[index] ?? null;
    },
    removeItem(key: string) {
      store.delete(key);
    },
    setItem(key: string, value: string) {
      store.set(key, value);
    },
  };
}

function initStorage(): StorageLike {
  if (typeof globalThis !== "undefined") {
    const existing = (globalThis as typeof globalThis & { localStorage?: StorageLike }).localStorage;
    if (existing && typeof existing.getItem === "function") {
      return existing;
    }
    const memory = createMemoryStorage();
    (globalThis as typeof globalThis & { localStorage: StorageLike }).localStorage = memory;
    return memory;
  }
  return createMemoryStorage();
}

const storage = initStorage();

export function loadLocalOverrides(): Record<string, ItemOverride> {
  const raw = JSON.parse(storage.getItem(KEY) || "{}") as Record<string, ItemOverride>;
  return Object.fromEntries(
    Object.entries(raw).map(([key, value]) => [key, normalizeOverride(value)]),
  );
}

export function saveLocalOverride(
  item: string,
  hero: string | undefined,
  attrs: Attribute[],
) {
  const data = loadLocalOverrides();
  if (!data[item]) data[item] = { name: item };
  if (hero) {
    const entry = data[item];
    const overrides = entry.editor_overrides ?? [];
    const idx = overrides.findIndex((o) => o.applyTo?.length === 1 && o.applyTo[0] === hero);
    const newEntry: EditorOverride = { applyTo: [hero], attributes: attrs };
    if (idx >= 0) overrides[idx] = newEntry;
    else overrides.push(newEntry);
    entry.editor_overrides = overrides;
  } else {
    data[item].attributes = attrs;
  }
  storage.setItem(KEY, JSON.stringify(data));
}

export function deleteLocalOverride(item: string, hero?: string) {
  const data = loadLocalOverrides();
  const entry = data[item];
  if (!entry) return;
  if (hero) {
    if (entry.editor_overrides) {
      entry.editor_overrides = entry.editor_overrides.filter((o) => !(o.applyTo?.includes(hero) && (o.applyTo?.length ?? 0) === 1));
      if (entry.editor_overrides.length === 0) delete entry.editor_overrides;
    }
  } else {
    delete entry.attributes;
    delete entry.editor_overrides;
    delete entry.disabled;
  }
  if (!entry.attributes && !entry.editor_overrides && entry.disabled === undefined) {
    delete data[item];
  }
  storage.setItem(KEY, JSON.stringify(data));
}
