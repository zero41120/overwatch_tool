import type { HeroMetadata, HeroPower, Item } from "wiki-data-reader";

export type {
  Attribute,
  EditorOverride,
  HeroMetadata,
  HeroPower,
  HeroRole,
  Item,
  ItemOverride,
  ItemRecord,
  ItemRarity,
  ItemTab,
} from "wiki-data-reader";

export interface RootData {
  tabs: {
    weapon: Rarity;
    ability: Rarity;
    survival: Rarity;
    powers: Record<string, HeroPower[]>;
  };
  heroes: HeroMetadata[];
}

export interface Rarity {
  common: Item[];
  rare: Item[];
  epic: Item[];
}

export interface WeightRow {
  type: string;
  weight: number;
}

export interface MinAttrGroup {
  attrs: string[];
  value: number;
}

export interface ResultCombo {
  items: Item[];
  cost: number;
  score: number;
  breakdown?: { type: string; sum: number; contrib: number }[];
}

export const ALL_HEROES = "All Heroes";
export const NO_HERO = "No Hero";
