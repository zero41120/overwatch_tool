import { getHeroMetadata, getHeroPowers, getItemRecords } from "wiki-data-reader";
import type { HeroPower, Item, ItemOverride, ItemRecord, RootData } from "./types";

function loadItemRecords(): ItemRecord[] {
  return getItemRecords();
}

function emptyRarity() {
  return {
    common: [] as Item[],
    rare: [] as Item[],
    epic: [] as Item[],
  };
}

export function readLocalData(): RootData {
  const tabs: RootData["tabs"] = {
    weapon: emptyRarity(),
    ability: emptyRarity(),
    survival: emptyRarity(),
    powers: {},
  };
  const rarityTabs = {
    weapon: tabs.weapon,
    ability: tabs.ability,
    survival: tabs.survival,
  } as const;

  loadItemRecords().forEach(({ item }) => {
    if (!item.tab || !item.rarity) {
      throw new Error(`Item ${item.name} is missing tab or rarity metadata`);
    }
    const tabGroup = rarityTabs[item.tab as keyof typeof rarityTabs];
    if (!tabGroup) {
      throw new Error(`Unsupported tab ${item.tab} for ${item.name}`);
    }
    const rarityList = tabGroup[item.rarity];
    if (!rarityList) {
      throw new Error(`Unsupported rarity ${item.rarity} for ${item.name}`);
    }
    rarityList.push(item);
  });

  const powers: Record<string, HeroPower[]> = {};
  getHeroPowers().forEach((power) => {
    const heroPowers = powers[power.hero] ?? [];
    heroPowers.push(power);
    powers[power.hero] = heroPowers;
  });

  Object.values(powers).forEach((list) => {
    list.sort((a, b) => {
      const orderA = a.order ?? 0;
      const orderB = b.order ?? 0;
      return orderA - orderB;
    });
  });

  tabs.powers = powers;

  return { tabs, heroes: getHeroMetadata() };
}

export function readOverrideData(): Record<string, ItemOverride> {
  const overrides: Record<string, ItemOverride> = {};

  loadItemRecords().forEach(({ item, override }) => {
    if (!override) return;
    const key = override.name || override.id || item.name;
    overrides[key] = override;
  });

  return overrides;
}

export default readLocalData;
