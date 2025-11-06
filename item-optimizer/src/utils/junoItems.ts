import { useMemo } from "react";

import type { Item } from "../types";
import { parseNumeric } from "./utils";
import type { TorpedoItem } from "./junoBreakpoints";

type ItemMeta = {
  addBaseAdd?: number;
  burn?: boolean;
  situational?: boolean;
  addAp?: number;
  addHp?: number;
  addWp?: number;
  addLifesteal?: number;
  addDr?: number;
  addHps?: number;
};

export const SITUATIONAL_PRIORITY = [
  "SKYLINE NANITES",
  "PULSTAR DESTROYERS",
  "MARK OF THE KITSUNE",
] as const;

const ITEM_OVERRIDES: Record<string, ItemMeta> = {
  "PULSTAR DESTROYERS": { situational: true },
  "MARK OF THE KITSUNE": { situational: true },
};

const MANUAL_ITEMS: TorpedoItem[] = [
  {
    id: "manual-skyline-nanites",
    name: "SKYLINE NANITES",
    cost: 9000,
    ap: 0,
    baseAdd: 0,
    burn: true,
    hp: 0,
    wp: 0,
    lifesteal: 0,
    dr: 0,
    hps: 0,
    situational: true,
  },
];

function extractBaseAdd(value: string) {
  const matches = value.match(/stat-ap\">(\d+(?:\.\d+)?)/g);
  if (!matches) return 0;
  return matches.reduce((sum, segment) => {
    const numeric = segment.match(/(\d+(?:\.\d+)?)/);
    return sum + (numeric ? Number(numeric[1]) : 0);
  }, 0);
}

function buildFromItem(item: Item): TorpedoItem {
  let ap = 0;
  let baseAdd = 0;
  let hp = 0;
  let wp = 0;
  let lifesteal = 0;
  let dr = 0;
  let hps = 0;
  let burn = false;

  item.attributes.forEach((attr) => {
    switch (attr.type) {
      case "AP":
        ap += parseNumeric(attr.value);
        break;
      case "WP":
        wp += parseNumeric(attr.value);
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
      case "description":
        baseAdd += extractBaseAdd(attr.value);
        if (/burn/i.test(attr.value)) burn = true;
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
    ap: ap + (override?.addAp ?? 0),
    baseAdd: baseAdd + (override?.addBaseAdd ?? 0),
    burn: burn || Boolean(override?.burn),
    hp: hp + (override?.addHp ?? 0),
    wp: wp + (override?.addWp ?? 0),
    lifesteal: lifesteal + (override?.addLifesteal ?? 0),
    dr: dr + (override?.addDr ?? 0),
    hps: hps + (override?.addHps ?? 0),
    situational: Boolean(override?.situational),
  };
}

function sortTorpedoItems(items: TorpedoItem[]) {
  const priority = new Map<string, number>();
  SITUATIONAL_PRIORITY.forEach((name, index) => priority.set(name, index));
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
      if (b.ap !== a.ap) return b.ap - a.ap;
      if (b.baseAdd !== a.baseAdd) return b.baseAdd - a.baseAdd;
      return a.name.localeCompare(b.name);
    });
}

export function useJunoTorpedoItems(items: Item[]): TorpedoItem[] {
  return useMemo(() => {
    const mapped = items.map(buildFromItem);
    const filtered = mapped.filter(
      (item) =>
        item.ap > 0 ||
        item.baseAdd > 0 ||
        item.burn ||
        item.hp > 0 ||
        item.wp > 0 ||
        item.lifesteal > 0 ||
        item.dr > 0 ||
        item.hps > 0 ||
        item.situational,
    );

    const manual = MANUAL_ITEMS.filter(
      (manualItem) => !filtered.some((existing) => existing.name === manualItem.name),
    );

    return sortTorpedoItems([...filtered, ...manual]);
  }, [items]);
}
