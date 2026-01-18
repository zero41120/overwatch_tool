import type { Item } from "../types";
import { parseNumeric } from "./numberUtils";
import type { OptimizerExtraField, OptimizerParetoOptions, OptimizerProfile } from "./optimizerParetoTypes";

const EPSILON = 1e-9;
export type ItemMeta = {
  cost: number;
  attrs: number[];
  extras: number[];
};

function buildExtraValues(item: Item, extraFields: OptimizerExtraField[]): number[] {
  return extraFields.map((field) => field.itemValue(item));
}

export function buildItemMeta(
  item: Item,
  attrKeys: string[],
  attrIndex: Map<string, number>,
  extraFields: OptimizerExtraField[],
): ItemMeta {
  const attrs = Array(attrKeys.length).fill(0) as number[];
  item.attributes.forEach((attr) => {
    const idx = attrIndex.get(attr.type);
    if (idx === undefined) return;
    attrs[idx] += parseNumeric(attr.value);
  });

  return {
    cost: item.cost,
    attrs,
    extras: buildExtraValues(item, extraFields),
  };
}

export function dominates(a: OptimizerProfile, b: OptimizerProfile, extraFieldCount: number) {
  let strictlyBetter = false;
  for (let i = 0; i < a.attrs.length; i += 1) {
    if (a.attrs[i] + EPSILON < b.attrs[i]) return false;
    if (a.attrs[i] > b.attrs[i] + EPSILON) strictlyBetter = true;
  }

  for (let i = 0; i < extraFieldCount; i += 1) {
    if (a.extras[i] + EPSILON < b.extras[i]) return false;
    if (a.extras[i] > b.extras[i] + EPSILON) strictlyBetter = true;
  }

  return strictlyBetter;
}

export function heuristicScore(profile: OptimizerProfile, extraFieldCount: number) {
  const base = profile.attrs.reduce((sum, value) => sum + value, 0);
  let extra = 0;
  for (let i = 0; i < extraFieldCount; i += 1) {
    extra += profile.extras[i];
  }
  return base + extra;
}

export function insertProfile(
  list: OptimizerProfile[],
  candidate: OptimizerProfile,
  opts: OptimizerParetoOptions,
) {
  const extraFieldCount = opts.extraFields?.length ?? 0;
  for (const existing of list) {
    if (dominates(existing, candidate, extraFieldCount)) return;
  }

  for (let i = list.length - 1; i >= 0; i -= 1) {
    if (dominates(candidate, list[i], extraFieldCount)) {
      list.splice(i, 1);
    }
  }

  list.push(candidate);

  if (opts.maxFrontier !== undefined && list.length > opts.maxFrontier) {
    list.sort(
      (a, b) =>
        heuristicScore(b, extraFieldCount) - heuristicScore(a, extraFieldCount),
    );
    list.length = opts.maxFrontier;
  }
}
