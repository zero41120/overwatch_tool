export interface Attribute {
  type: string;
  value: string;
}

export interface Item {
  name: string;
  attributes: Attribute[];
  cost: number;
  character?: string;
  id?: string;
  tab: string;
  rarity: "common" | "rare" | "epic";
  iconUrl?: string;
}

export interface RootData {
  tabs: {
    weapon: Rarity;
    ability: Rarity;
    survival: Rarity;
    powers: Record<string, unknown>;
  };
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

export interface ItemOverride {
  attributes?: Attribute[];
  [hero: string]: Attribute[] | undefined;
}

export interface ResultCombo {
  items: Item[];
  cost: number;
  score: number;
  breakdown?: { type: string; sum: number; contrib: number }[];
}

export const ALL_HEROES = "All Heroes";
export const NO_HERO = "No Hero";
