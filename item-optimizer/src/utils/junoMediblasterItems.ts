import { useMemo } from "react";

import type { Item } from "../types";
import { parseNumeric } from "./numberUtils";

export type MediblasterItem = {
  id: string;
  name: string;
  cost: number;
  wp: number;
  as: number;
  weaponMultiplier: number;
  ma: number;
  hp: number;
  lifesteal: number;
  dr: number;
  hps: number;
  situational: boolean;
};

export const MEDIBLASTER_SITUATIONAL_PRIORITY = [
  "LONG RANGE BLASTER",
  "THE CLOSER",
  "AERIAL DISTRESSER",
] as const;

const ITEM_OVERRIDES: Record<string, { situational?: boolean }> = {
  "LONG RANGE BLASTER": { situational: true },
  "THE CLOSER": { situational: true },
  "AERIAL DISTRESSER": { situational: true },
};

function sortMediblasterItems(items: MediblasterItem[]) {
  const priority = new Map<string, number>();
  MEDIBLASTER_SITUATIONAL_PRIORITY.forEach((name, index) => priority.set(name, index));
  return items
    .slice()
    .sort((a, b) => {
      const aPriority = priority.has(a.name);
      const bPriority = priority.has(b.name);
      if (aPriority || bPriority) {
        const aRank = priority.get(a.name) ?? Number.POSITIVE_INFINITY;
        const bRank = priority.get(b.name) ?? Number.POSITIVE_INFINITY;
        if (aRank !== bRank) return aRank - bRank;
      }
      if (a.situational !== b.situational) return Number(b.situational) - Number(a.situational);
      if (b.weaponMultiplier !== a.weaponMultiplier) return b.weaponMultiplier - a.weaponMultiplier;
      if (b.wp !== a.wp) return b.wp - a.wp;
      if (b.as !== a.as) return b.as - a.as;
      if (b.ma !== a.ma) return b.ma - a.ma;
      return a.name.localeCompare(b.name);
    });
}

export function buildMediblasterItem(item: Item): MediblasterItem {
  let wp = 0;
  let as = 0;
  let weaponMultiplier = 0;
  let ma = 0;
  let hp = 0;
  let lifesteal = 0;
  let dr = 0;
  let hps = 0;

  item.attributes.forEach((attr) => {
    switch (attr.type) {
      case "WP":
        wp += parseNumeric(attr.value);
        break;
      case "AS":
        as += parseNumeric(attr.value);
        break;
      case "Weapon Multiplier":
        weaponMultiplier += parseNumeric(attr.value);
        break;
      case "MA":
        ma += parseNumeric(attr.value);
        break;
      case "ALS":
      case "WPLS":
        lifesteal += parseNumeric(attr.value);
        break;
      case "Health":
        hp += parseNumeric(attr.value);
        break;
      case "Shield":
      case "Shields":
        hps += parseNumeric(attr.value);
        break;
      case "Armor":
        dr += parseNumeric(attr.value);
        break;
      default:
        break;
    }
  });

  const override = ITEM_OVERRIDES[item.name];

  return {
    id: item.id ?? item.name,
    name: item.name,
    cost: item.cost,
    wp,
    as,
    weaponMultiplier,
    ma,
    hp,
    lifesteal,
    dr,
    hps,
    situational: Boolean(override?.situational),
  };
}

export function useJunoMediblasterItems(items: Item[]): MediblasterItem[] {
  return useMemo(() => {
    const mapped = items.map(buildMediblasterItem);
    const filtered = mapped.filter(
      (item) =>
        item.wp > 0 ||
        item.as > 0 ||
        item.weaponMultiplier > 0 ||
        item.ma > 0 ||
        item.situational ||
        item.hp > 0 ||
        item.lifesteal > 0 ||
        item.dr > 0 ||
        item.hps > 0,
    );
    return sortMediblasterItems(filtered);
  }, [items]);
}
