import type { Item } from "../types";
import { parseNumeric } from "./utils";
import type { TorpedoItem } from "./junoBreakpoints";

const BURN_ITEM_NAMES = new Set([
  "SKYLINE NANITES",
]);

const SITUATIONAL_ITEM_NAMES = new Set([
  "SKYLINE NANITES",
  "PULSTAR DESTROYERS",
  "MARK OF THE KITSUNE",
]);

function normalizeName(name: string) {
  return name.trim().toUpperCase();
}

function extractBaseAdd(item: Item) {
  let total = 0;
  const upperName = normalizeName(item.name);

  item.attributes.forEach((attr) => {
    if (attr.type !== "description") return;
    const lower = attr.value.toLowerCase();
    if (!lower.includes("damage")) return;
    if (
      !lower.includes("torpedo") &&
      !lower.includes("pulsar") &&
      !lower.includes("bonus damage") &&
      !lower.includes("burn")
    ) {
      // Ignore descriptions that mention damage for unrelated abilities.
      return;
    }

    const matches = attr.value.matchAll(/<b[^>]*class=\"[^\"]*stat-ap[^\"]*\"[^>]*>(\d+(?:\.\d+)?)<\/b>/gi);
    for (const match of matches) {
      total += Number(match[1]);
    }
  });

  // Some items may encode flat damage in attributes (rare but handle gracefully)
  item.attributes.forEach((attr) => {
    if (attr.type === "Base Damage") {
      total += parseNumeric(attr.value);
    }
  });

  if (upperName === "MARK OF THE KITSUNE" && total === 0) {
    total = 25;
  }

  return total;
}

export function toJunoTorpedoItem(item: Item): TorpedoItem | null {
  const id = item.id ?? item.name;
  let ap = 0;
  let hp = 0;
  let wp = 0;
  let lifesteal = 0;
  let dr = 0;
  let hps = 0;

  item.attributes.forEach((attr) => {
    const value = parseNumeric(attr.value);
    switch (attr.type) {
      case "AP":
        ap += value;
        break;
      case "Health":
      case "Shields":
        hp += value;
        break;
      case "WP":
        wp += value;
        break;
      case "ALS":
      case "WPLS":
        lifesteal += value;
        break;
      case "Armor":
        dr += value;
        break;
      case "HPS":
        hps += value;
        break;
      default:
        break;
    }
  });

  const baseAdd = extractBaseAdd(item);
  const burn = item.attributes.some((attr) => attr.type === "description" && /burn/i.test(attr.value));
  const normalizedName = normalizeName(item.name);
  const situational = SITUATIONAL_ITEM_NAMES.has(normalizedName);
  const hasBurn = burn || BURN_ITEM_NAMES.has(normalizedName);

  const relevant =
    ap !== 0 ||
    baseAdd !== 0 ||
    hp !== 0 ||
    wp !== 0 ||
    lifesteal !== 0 ||
    dr !== 0 ||
    hps !== 0 ||
    hasBurn;

  if (!relevant) return null;

  return {
    id,
    name: item.name,
    cost: item.cost ?? 0,
    ap,
    baseAdd,
    burn: hasBurn,
    hp,
    wp,
    lifesteal,
    dr,
    hps,
    situational,
  };
}

export function buildJunoTorpedoItems(items: Item[]): TorpedoItem[] {
  return items
    .map((item) => toJunoTorpedoItem(item))
    .filter((it): it is TorpedoItem => Boolean(it))
    .sort((a, b) => {
      if (a.situational !== b.situational) {
        return a.situational ? -1 : 1;
      }
      if (a.cost !== b.cost) return a.cost - b.cost;
      return a.name.localeCompare(b.name);
    });
}
