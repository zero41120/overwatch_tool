import type { Attribute, EditorOverride, ItemOverride } from "../types";

const RESERVED_KEYS = new Set(["id", "name", "cost", "character", "tab", "rarity", "attributes", "disabled", "editor_overrides"]);

function isAttributeArray(value: unknown): value is Attribute[] {
  return (
    Array.isArray(value) &&
    value.every(
      (entry) =>
        typeof entry === "object" &&
        entry !== null &&
        "type" in entry &&
        "value" in entry,
    )
  );
}

export function normalizeOverride(raw: ItemOverride | Record<string, unknown> | undefined): ItemOverride {
  if (!raw) return {};
  const base: ItemOverride = {};
  const editorOverrides: EditorOverride[] = [];

  for (const [key, value] of Object.entries(raw as Record<string, unknown>)) {
    if (key === "hero_overrides" && typeof value === "object" && value) {
      Object.entries(value as Record<string, unknown>).forEach(([hero, attrs]) => {
        if (isAttributeArray(attrs)) {
          editorOverrides.push({ applyTo: hero ? [hero] : undefined, attributes: attrs });
        }
      });
      continue;
    }
    if (RESERVED_KEYS.has(key)) {
      (base as Record<string, unknown>)[key] = value;
      continue;
    }
    if (isAttributeArray(value)) {
      editorOverrides.push({ applyTo: key ? [key] : undefined, attributes: value });
    }
  }

  if (editorOverrides.length > 0) {
    base.editor_overrides = editorOverrides;
  }

  return base;
}

export function resolveOverrideAttributes(override: ItemOverride | undefined, hero?: string) {
  if (!override) return undefined;
  if (hero && override.editor_overrides?.length) {
    const specific = override.editor_overrides.find((entry) => entry.applyTo?.includes(hero));
    if (specific) return specific.attributes;
    const global = override.editor_overrides.find((entry) => !entry.applyTo || entry.applyTo.length === 0);
    if (global) return global.attributes;
  }
  if (!hero) {
    if (override.attributes) return override.attributes;
    const global = override.editor_overrides?.find((entry) => !entry.applyTo || entry.applyTo.length === 0);
    if (global) return global.attributes;
    return undefined;
  }
  return override.attributes;
}
