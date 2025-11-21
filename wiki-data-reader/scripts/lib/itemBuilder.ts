import type { Attribute, Item, ItemRecord } from "../../types";
import { formatDescription, normalizeBuffName, normalizeBuffValue, normalizeItemName, slugifyName } from "./textUtils.ts";
import { extractAbilityTemplates, type AbilityTemplate } from "./templateParser.ts";
import { resolveIconUrl } from "./imageUtils.ts";

export interface HeroSnapshot {
  name: string;
  slug: string;
  raw: string;
}

type BuildContext = {
  character?: string;
  source: string;
};

type ImageLookup = ReadonlyMap<string, string> | undefined;

export function buildGeneralItemRecords(raw: string, images?: ImageLookup): ItemRecord[] {
  const templates = extractAbilityTemplates(raw);
  return templates
    .map((template) => toItemRecord(template, { source: "general" }, images))
    .filter((record): record is ItemRecord => Boolean(record));
}

export function buildHeroItemRecords(hero: HeroSnapshot, images?: ImageLookup): ItemRecord[] {
  const templates = extractAbilityTemplates(hero.raw);
  return templates
    .map((template) =>
      toItemRecord(template, {
        character: hero.name,
        source: hero.name,
      },
      images),
    )
    .filter((record): record is ItemRecord => Boolean(record));
}

const TAB_KEYWORDS: Record<string, "weapon" | "ability" | "survival"> = {
  weapon: "weapon",
  ability: "ability",
  survival: "survival",
  gadget: "survival",
};

function deriveTab(value: string | undefined) {
  if (!value) return null;
  const lower = value.toLowerCase();
  for (const [keyword, tab] of Object.entries(TAB_KEYWORDS)) {
    if (lower.includes(keyword)) return tab;
  }
  return null;
}

function toItemRecord(template: AbilityTemplate, context: BuildContext, images?: ImageLookup): ItemRecord | null {
  const fields = template.fields;
  if (fields.removed === "1") return null;
  const abilityType = fields.ability_type || "";
  if (/stadium power/i.test(abilityType)) return null;

  const name = normalizeItemName(fields.ability_name || "");
  if (!name) return null;

  const tab = deriveTab(abilityType);
  if (!tab) return null;

  const rarity = normalizeRarity(fields.stadium_rarity);
  if (!rarity) return null;

  const cost = Number((fields.stadium_cost || "").replace(/,/g, ""));
  if (!Number.isFinite(cost) || cost <= 0) return null;

  const attributes = parseAttributes(fields.stadium_buffs);
  const description = buildDescription(fields);
  if (description) {
    attributes.push({
      type: "description",
      value: description,
    });
  }

  const item: Item = {
    name,
    attributes,
    cost,
    tab,
    rarity,
  };
  const iconUrl = resolveIconUrl(fields.ability_image, images);
  if (iconUrl) {
    item.iconUrl = iconUrl;
  }

  const heroName = context.character ?? fields.hero_name;
  if (heroName && heroName.trim().length && heroName.toLowerCase() !== "all heroes") {
    item.character = heroName.trim();
  }

  return { item };
}

function normalizeRarity(value: string | undefined) {
  if (!value) return null;
  const normalized = value.trim().toLowerCase();
  if (normalized.startsWith("common")) return "common";
  if (normalized.startsWith("rare")) return "rare";
  if (normalized.startsWith("epic")) return "epic";
  return null;
}

function parseAttributes(raw: string | undefined) {
  if (!raw) return [];
  return raw
    .split("::")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => {
      const [name, value] = entry.split(";;");
      return {
        type: normalizeBuffName(name?.trim() || ""),
        value: normalizeBuffValue(value || ""),
      } as Attribute;
    })
    .filter((attr) => attr.type && attr.value);
}

function buildDescription(fields: Record<string, string>) {
  const parts = [fields.official_description, fields.ability_details];
  const combined = parts.filter(Boolean).join("\n").trim();
  const cooldown = fields.cooldown?.trim();
  const description = formatDescription(combined);
  if (cooldown) {
    const cooldownText = `<b>Cooldown:</b> ${cooldown}`;
    return description ? `${description} ${cooldownText}` : cooldownText;
  }
  return description;
}

type RecommendationField = "synergyHeroes" | "counterHeroes" | "antiSynergyHeroes" | "beingCountered";
const RECOMMENDATION_FIELDS: RecommendationField[] = [
  "synergyHeroes",
  "counterHeroes",
  "antiSynergyHeroes",
  "beingCountered",
];

export function mergeExistingData(records: ItemRecord[], existing: Map<string, ItemRecord>) {
  return records.map((record) => {
    const existingRecord = existing.get(record.item.name);
    if (!existingRecord) return record;
    const mergedItem: Item = {
      ...record.item,
      id: existingRecord.item.id,
    };
    const mergedIcon = record.item.iconUrl ?? existingRecord.item.iconUrl;
    if (mergedIcon !== undefined) {
      mergedItem.iconUrl = mergedIcon;
    } else {
      delete mergedItem.iconUrl;
    }
    for (const field of RECOMMENDATION_FIELDS) {
      const manualMetadata = record.item[field] ?? existingRecord.item[field];
      if (manualMetadata !== undefined) {
        mergedItem[field] = [...manualMetadata];
      } else {
        delete mergedItem[field];
      }
    }
    const merged: ItemRecord = {
      item: mergedItem,
    };
    if (existingRecord.override) {
      merged.override = existingRecord.override;
    }
    return merged;
  });
}

export function recordDiffers(a: ItemRecord | undefined, b: ItemRecord | undefined) {
  if (!a && b) return true;
  if (a && !b) return true;
  if (!a || !b) return false;
  return JSON.stringify(a) !== JSON.stringify(b);
}

export function recordToSource(record: ItemRecord) {
  return `import type { ItemRecord } from "../types";

const record: ItemRecord = ${toLiteral(record, 2)};

export default record;
`;
}

function toLiteral(value: unknown, indentSize: number, depth = 0): string {
  const indent = " ".repeat(indentSize * depth);
  const nextIndent = " ".repeat(indentSize * (depth + 1));

  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    const items = value.map((entry) => `${nextIndent}${toLiteral(entry, indentSize, depth + 1)}`);
    return `[\n${items.join(",\n")}\n${indent}]`;
  }

  if (value && typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>);
    if (entries.length === 0) return "{}";
    const body = entries
      .map(([key, val]) => `${nextIndent}${key}: ${toLiteral(val, indentSize, depth + 1)}`)
      .join(",\n");
    return `{\n${body}\n${indent}}`;
  }

  if (typeof value === "string") {
    return JSON.stringify(value);
  }

  return String(value);
}

export function groupBySlug(records: ItemRecord[]) {
  const map = new Map<string, ItemRecord>();
  for (const record of records) {
    map.set(slugifyName(record.item.name), record);
  }
  return map;
}
