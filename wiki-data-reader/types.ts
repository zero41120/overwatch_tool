export interface Attribute {
  type: string;
  value: string;
}

export type ItemTab = "weapon" | "ability" | "survival";
export type ItemRarity = "common" | "rare" | "epic";

export type HeroRole = "tank" | "damage" | "support";

export interface Item {
  name: string;
  attributes: Attribute[];
  cost: number;
  character?: string;
  id?: string;
  tab: ItemTab;
  rarity: ItemRarity;
  iconUrl?: string;
  synergyHeroes?: string[];
  counterHeroes?: string[];
}

export interface EditorOverride {
  applyTo?: string[];
  attributes: Attribute[];
}

export interface ItemOverride extends Partial<Pick<Item, "id" | "name" | "cost" | "character" | "tab" | "rarity">> {
  attributes?: Attribute[];
  disabled?: boolean;
  editor_overrides?: EditorOverride[];
  synergyHeroes?: string[];
  counterHeroes?: string[];
}

export interface ItemRecord {
  item: Item;
  override?: ItemOverride;
}

export interface HeroPower {
  hero: string;
  name: string;
  affectedAbility?: string;
  description: string;
  iconUrl?: string;
  synergyHeroes?: string[];
  counterHeroes?: string[];
}

export interface HeroMetadata {
  name: string;
  slug: string;
  iconUrl?: string;
  role?: HeroRole;
}
