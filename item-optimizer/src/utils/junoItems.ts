import type { Attribute, Item } from "../types";
import { parseNumeric } from "./utils";
import type { JunoItem } from "./junoBreakpoints";

const BURN_NAMES = new Set(["SKYLINE NANITES"]);
const SITUATIONAL_NAMES = new Set([
  "SKYLINE NANITES",
  "PULSTAR DESTROYERS",
  "MARK OF THE KITSUNE",
]);

function extractBaseAdd(attributes: Attribute[]): number {
  let total = 0;
  for (const attr of attributes) {
    if (attr.type !== "description") continue;
    const regex = /class="stat-ap">([\d.]+)/g;
    let match: RegExpExecArray | null;
    while ((match = regex.exec(attr.value))) {
      total += Number(match[1]);
    }
  }
  return total;
}

function sumAttributes(attributes: Attribute[], types: string[]): number {
  return attributes
    .filter((attr) => types.includes(attr.type))
    .map((attr) => parseNumeric(attr.value))
    .reduce((sum, value) => sum + value, 0);
}

export function buildJunoItems(items: Item[]): JunoItem[] {
  const results: JunoItem[] = [];
  items.forEach((item) => {
    if (item.character && item.character !== "Juno") return;
    const id = item.id ?? item.name;
    const ap = sumAttributes(item.attributes, ["AP"]);
    const hp = sumAttributes(item.attributes, ["Health", "Shields", "Armor"]);
    const wp = sumAttributes(item.attributes, ["WP"]);
    const lifesteal = sumAttributes(item.attributes, ["ALS", "WPLS", "Life Steal"]);
    const dr = sumAttributes(item.attributes, ["Damage Reduction", "DR"]);
    const hps = sumAttributes(item.attributes, ["Healing", "Healing Per Second", "Healing per Second", "HPS"]);
    const baseAdd = extractBaseAdd(item.attributes);
    const burn = BURN_NAMES.has(item.name);
    const situational = SITUATIONAL_NAMES.has(item.name);

    const relevant = ap || baseAdd || hp || wp || lifesteal || dr || hps || burn;
    if (!relevant) return;

    results.push({
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
      situational,
    });
  });

  return results;
}
