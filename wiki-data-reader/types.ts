export interface Attribute {
  type: string;
  value: string;
}

export type ItemTab = "weapon" | "ability" | "survival";
export type ItemRarity = "common" | "rare" | "epic";

export interface Item {
  name: string;
  attributes: Attribute[];
  cost: number;
  character?: string;
  id?: string;
  tab: ItemTab;
  rarity: ItemRarity;
  iconUrl?: string;
}

export interface EditorOverride {
  applyTo?: string[];
  attributes: Attribute[];
}

export interface ItemOverride extends Partial<Pick<Item, "id" | "name" | "cost" | "character" | "tab" | "rarity">> {
  attributes?: Attribute[];
  disabled?: boolean;
  editor_overrides?: EditorOverride[];
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
}
