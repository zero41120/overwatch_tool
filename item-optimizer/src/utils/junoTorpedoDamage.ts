import type { Item } from "../types";
import type { TorpedoItem } from "./junoBreakpoints";
import { parseNumeric } from "./numberUtils";

export const TORPEDO_DAMAGE_ATTR = "Torpedo Damage";
export const TORPEDO_BASE_DAMAGE = 85;

type ItemMeta = {
  addBaseAdd?: number;
  situational?: boolean;
  addAp?: number;
  addHp?: number;
  addWp?: number;
  addLifesteal?: number;
  addDr?: number;
  addHps?: number;
};

const ITEM_OVERRIDES: Record<string, ItemMeta> = {
  "PULSTAR DESTROYERS": { situational: true },
  "MARK OF THE KITSUNE": { situational: true },
  "SKYLINE NANITES": { situational: true },
  CYBERVENOM: { situational: true },
};

function extractBaseAdd(value: string) {
  const matches = value.match(/stat-ap\">(\d+(?:\.\d+)?)/g);
  if (!matches) return 0;
  return matches.reduce((sum, segment) => {
    const numeric = segment.match(/(\d+(?:\.\d+)?)/);
    return sum + (numeric ? Number(numeric[1]) : 0);
  }, 0);
}

export function buildTorpedoItem(item: Item): TorpedoItem {
  let ap = 0;
  let baseAdd = 0;
  let hp = 0;
  let wp = 0;
  let lifesteal = 0;
  let dr = 0;
  let hps = 0;

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
    hp: hp + (override?.addHp ?? 0),
    wp: wp + (override?.addWp ?? 0),
    lifesteal: lifesteal + (override?.addLifesteal ?? 0),
    dr: dr + (override?.addDr ?? 0),
    hps: hps + (override?.addHps ?? 0),
    situational: Boolean(override?.situational),
  };
}

export function itemAffectsTorpedoDamage(item: Item): boolean {
  const torpedoItem = buildTorpedoItem(item);
  return torpedoItem.ap > 0 || torpedoItem.baseAdd > 0 || torpedoItem.situational;
}

export function computeJunoTorpedoDamage(items: Item[], baseDamage = TORPEDO_BASE_DAMAGE): number {
  let ap = 0;
  let baseAdd = 0;
  let hasSkyline = false;

  items.forEach((item) => {
    const torpedoItem = buildTorpedoItem(item);
    ap += torpedoItem.ap;
    baseAdd += torpedoItem.baseAdd;
    if (/^skyline\s+nanites$/i.test(item.name.toLocaleLowerCase())) {
      hasSkyline = true;
    }
  });

  const base = baseDamage + baseAdd;
  const raw = base * (1 + ap / 100);
  return Number((hasSkyline ? raw * 1.2 : raw).toFixed(0));
}
