import type { Item, WeightRow, MinAttrGroup, MetricValues } from "../types";
import type { MetricInputValuesByMetric } from "../metrics/core/metricRegistry";
import {
  collectMetricInputAttributes,
  computeMetricOutputs,
  getMetricOutputsForHero,
  isMetricOutputKey,
} from "../metrics/core/metricRegistry";
import type { MetricContext } from "../metrics/core/metricContext";
import { buildDerivedStatMap } from "./derivedStatMap";

type AggregateOptions = {
  metricOutputKeys?: Set<string>;
  metricInputValues?: MetricInputValuesByMetric;
  heroPowers?: string[];
};

export function aggregate(items: Item[], hero?: string, opts: AggregateOptions = {}): Map<string, number> {
  const derivedMap = buildDerivedStatMap(items);
  const map = new Map(derivedMap);
  if (opts.metricOutputKeys && opts.metricOutputKeys.size > 0) {
    const context: MetricContext = {
      items,
      map: derivedMap,
      hero: hero ?? "",
      heroPowers: opts.heroPowers,
    };
    const outputs = computeMetricOutputs(context, opts.metricOutputKeys, opts.metricInputValues);
    outputs.forEach((value, key) => map.set(key, value));
  }
  return map;
}

export function scoreFromMap(map: Map<string, number>, weights: WeightRow[]) {
  let total = 0;
  weights.forEach((w) => {
    total += (map.get(w.type) ?? 0) * w.weight;
  });
  return total;
}

export function metricValuesFromMap(map: Map<string, number>): MetricValues {
  const values: MetricValues = {};
  map.forEach((value, key) => {
    values[key] = value;
  });
  return values;
}

export function mapFromMetricValues(values: MetricValues): Map<string, number> {
  return new Map(Object.entries(values));
}

export function rarityColor(r: Item["rarity"]) {
  switch (r) {
    case "common":
      return "#17a631";
    case "rare":
      return "#217dbe";
    case "epic":
      return "#8727d6";
    default:
      return "black";
  }
}

export function meetsMinGroups(items: Item[], groups: MinAttrGroup[], hero?: string, opts: AggregateOptions = {}) {
  const map = aggregate(items, hero, opts);
  return groups.every((g) => {
    const sum = g.attrs.reduce((s, a) => s + (map.get(a) ?? 0), 0);
    return sum >= g.value;
  });
}

export function collectRelevantAttributes(
  weights: WeightRow[],
  enabled: boolean,
  groups: MinAttrGroup[],
) {
  const set = new Set(weights.map((w) => w.type));
  const metricInputs = collectMetricInputAttributes(set);
  metricInputs.forEach((attr) => set.add(attr));
  Array.from(set).forEach((value) => {
    if (isMetricOutputKey(value)) set.delete(value);
  });
  if (enabled) {
    groups.forEach((g) => {
      g.attrs.forEach((a) => set.add(a));
    });
  }
  set.delete("");
  return set;
}

export function buildBreakdown(
  map: Map<string, number>,
  weights: WeightRow[],
  enabled: boolean,
  groups: MinAttrGroup[],
  hero?: string,
) {
  const attrs = collectRelevantAttributes(weights, enabled, groups);
  const units = new Map<string, string>();
  if (hero) {
    getMetricOutputsForHero(hero).forEach((output) => {
      units.set(output.outputKey, output.unit);
    });
  }
  const resolveUnit = (type: string) => units.get(type) ?? "raw";
  const rows: { type: string; sum: number; weight: number; contrib: number; unit: string }[] = [];
  weights.forEach((w) => {
    const sum = map.get(w.type) ?? 0;
    rows.push({
      type: w.type,
      sum,
      weight: w.weight,
      contrib: sum * w.weight,
      unit: resolveUnit(w.type),
    });
    attrs.delete(w.type);
  });
  attrs.forEach((type) => {
    const sum = map.get(type) ?? 0;
    rows.push({ type, sum, weight: 0, contrib: 0, unit: resolveUnit(type) });
  });
  return rows;
}

export interface ResultComboBasic {
  cost: number;
  score: number;
}

export function rankBestCombos<T extends ResultComboBasic>(
  combos: T[],
  preferHighCost: boolean,
) {
  const [best, ...others] = combos
    .slice()
    .sort((a, b) => (preferHighCost ? b.cost - a.cost : a.cost - b.cost));
  const alternatives = others.sort((a, b) =>
    preferHighCost ? b.cost - a.cost : a.cost - b.cost,
  );
  return { best, alternatives };
}

export function uniqueByItems<T extends { items: Item[] }>(combos: T[]): T[] {
  const seen = new Set<string>();
  return combos.filter((c) => {
    const key = c.items
      .map((i) => i.id || i.name)
      .sort()
      .join(",");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
