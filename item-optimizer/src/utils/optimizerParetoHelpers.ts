import type { Item } from "../types";
import { buildTorpedoItem } from "./junoTorpedoDamage";
import { parseNumeric } from "./numberUtils";
import type { OptimizerParetoOptions, OptimizerProfile } from "./optimizerParetoTypes";

const EPSILON = 1e-9;
const CODEBREAKER_NAME = "CODEBREAKER";

export type ItemMeta = {
  cost: number;
  attrs: number[];
  torpedoBaseAdd: number;
  hasSkyline: boolean;
  hasCodebreaker: boolean;
};

export function buildItemMeta(item: Item, attrKeys: string[], attrIndex: Map<string, number>): ItemMeta {
  const attrs = Array(attrKeys.length).fill(0) as number[];
  item.attributes.forEach((attr) => {
    const idx = attrIndex.get(attr.type);
    if (idx === undefined) return;
    attrs[idx] += parseNumeric(attr.value);
  });

  const torpedoItem = buildTorpedoItem(item);
  return {
    cost: item.cost,
    attrs,
    torpedoBaseAdd: torpedoItem.baseAdd,
    hasSkyline: /^skyline\s+nanites$/i.test(item.name.toLocaleLowerCase()),
    hasCodebreaker: item.name.toUpperCase() === CODEBREAKER_NAME,
  };
}

export function dominates(
  a: OptimizerProfile,
  b: OptimizerProfile,
  considerTorpedo: boolean,
  considerMediblaster: boolean,
) {
  let strictlyBetter = false;
  for (let i = 0; i < a.attrs.length; i += 1) {
    if (a.attrs[i] + EPSILON < b.attrs[i]) return false;
    if (a.attrs[i] > b.attrs[i] + EPSILON) strictlyBetter = true;
  }

  if (considerTorpedo) {
    if (a.torpedoBaseAdd + EPSILON < b.torpedoBaseAdd) return false;
    if (a.torpedoBaseAdd > b.torpedoBaseAdd + EPSILON) strictlyBetter = true;
    if (Number(a.hasSkyline) < Number(b.hasSkyline)) return false;
    if (a.hasSkyline !== b.hasSkyline) strictlyBetter = true;
  }

  if (considerMediblaster) {
    if (Number(a.hasCodebreaker) < Number(b.hasCodebreaker)) return false;
    if (a.hasCodebreaker !== b.hasCodebreaker) strictlyBetter = true;
  }

  return strictlyBetter;
}

export function heuristicScore(
  profile: OptimizerProfile,
  considerTorpedo: boolean,
  considerMediblaster: boolean,
) {
  const base = profile.attrs.reduce((sum, value) => sum + value, 0);
  const torpedo = considerTorpedo ? profile.torpedoBaseAdd + Number(profile.hasSkyline) : 0;
  const mediblaster = considerMediblaster ? Number(profile.hasCodebreaker) : 0;
  return base + torpedo + mediblaster;
}

export function insertProfile(
  list: OptimizerProfile[],
  candidate: OptimizerProfile,
  opts: OptimizerParetoOptions,
) {
  for (const existing of list) {
    if (dominates(existing, candidate, opts.considerTorpedo, opts.considerMediblaster)) return;
  }

  for (let i = list.length - 1; i >= 0; i -= 1) {
    if (dominates(candidate, list[i], opts.considerTorpedo, opts.considerMediblaster)) {
      list.splice(i, 1);
    }
  }

  list.push(candidate);

  if (list.length > opts.maxFrontier) {
    list.sort(
      (a, b) =>
        heuristicScore(b, opts.considerTorpedo, opts.considerMediblaster) -
        heuristicScore(a, opts.considerTorpedo, opts.considerMediblaster),
    );
    list.length = opts.maxFrontier;
  }
}
