import heroPowers from "./heroPowers";
import type { HeroPower, ItemOverride, ItemRecord } from "./types";

type ItemModule = {
  default: ItemRecord;
};

const itemModules = import.meta.glob<ItemModule>("./items/*.ts", {
  eager: true,
});

const itemRecords: ItemRecord[] = Object.values(itemModules)
  .map((module) => module.default)
  .filter((record): record is ItemRecord => Boolean(record?.item));

export function getItemRecords(): ItemRecord[] {
  return itemRecords;
}

export function getHeroPowers(): HeroPower[] {
  return heroPowers;
}

export function getOverrides(): Record<string, ItemOverride> {
  const overrides: Record<string, ItemOverride> = {};

  for (const record of itemRecords) {
    if (!record.override) continue;
    const key = record.override.name || record.override.id || record.item.name;
    overrides[key] = record.override;
  }

  return overrides;
}

export type * from "./types";
