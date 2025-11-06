import type { Item as RawItem } from "../types";
import { parseNumeric } from "./utils";
import type { TorpedoItem } from "./junoTypes";

const PRIORITY_NAMES = ["Skyline Nanites", "Pulsar Destroyers", "Mark of the Kitsune"];
const TORPEDO_PATTERN = /torpedo/i;
const DAMAGE_VALUE_PATTERN = /class=\"stat-ap\">([\d.]+)/gi;
const BURN_PATTERN = /burn/i;

export function normalizeTorpedoItems(items: RawItem[]): TorpedoItem[] {
  const prioritized = new Set(PRIORITY_NAMES.map((n) => n.toLowerCase()));
  const abilityItems = items
    .filter((it) => it.tab === "ability" && (!it.character || it.character === "Juno"))
    .map((it) => adaptItem(it, prioritized));

  const filtered = abilityItems.filter((it) => {
    if (it.ap || it.baseAdd || it.burn || it.hp || it.wp || it.lifesteal || it.dr || it.hps) {
      return true;
    }
    return prioritized.has(it.name.toLowerCase());
  });

  return filtered.sort((a, b) => {
    const aPri = priorityIndex(a.name);
    const bPri = priorityIndex(b.name);
    if (aPri !== bPri) {
      if (aPri === -1) return 1;
      if (bPri === -1) return -1;
      return aPri - bPri;
    }
    if (a.cost !== b.cost) return a.cost - b.cost;
    return a.name.localeCompare(b.name);
  });
}

function adaptItem(item: RawItem, prioritized: Set<string>): TorpedoItem {
  const id = item.id ?? item.name;
  let ap = 0;
  let baseAdd = 0;
  let burn = false;
  let hp = 0;
  let wp = 0;
  let lifesteal = 0;
  let dr = 0;
  let hps = 0;

  item.attributes.forEach((attr) => {
    const value = attr.value;
    const type = attr.type;
    const num = parseNumeric(value);
    switch (type) {
      case "AP":
        ap += num;
        break;
      case "WP":
        wp += num;
        break;
      case "ALS":
      case "WPLS":
        lifesteal += num;
        break;
      case "Health":
      case "Shields":
        hp += num;
        break;
      case "Armor":
        dr += num;
        break;
      default:
        break;
    }

    if (!burn && BURN_PATTERN.test(value)) {
      burn = true;
    }

    if (TORPEDO_PATTERN.test(type) || TORPEDO_PATTERN.test(value)) {
      let match: RegExpExecArray | null;
      while ((match = DAMAGE_VALUE_PATTERN.exec(value)) !== null) {
        baseAdd += parseFloat(match[1]);
      }
    }
  });

  return {
    id,
    name: item.name,
    cost: item.cost,
    ap,
    baseAdd,
    burn,
    hp,
    wp,
    lifesteal,
    dr,
    hps,
    situational: prioritized.has(item.name.toLowerCase()),
  };
}

function priorityIndex(name: string) {
  return PRIORITY_NAMES.findIndex((n) => n.toLowerCase() === name.toLowerCase());
}
