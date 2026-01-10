import type { Item, WeightRow, MinAttrGroup } from "../types";
import type { MetricInputValuesByMetric } from "../metrics/metricRegistry";
import { collectMetricInputAttributes, computeMetricOutputs, isMetricOutputKey } from "../metrics/metricRegistry";
import type { MetricContext } from "../metrics/metricContext";
import { computeMediblasterOutputFromMap, includeMediblasterInputs, MEDIBLASTER_OUTPUT_ATTR } from "./junoMediblaster";
import { computeJunoTorpedoDamage, includeTorpedoInputs, TORPEDO_DAMAGE_ATTR } from "./junoTorpedoDamage";
import { parseNumeric } from "./numberUtils";

type AggregateOptions = {
  enemyHasArmor?: boolean;
  metricOutputKeys?: Set<string>;
  metricInputValues?: MetricInputValuesByMetric;
};

export function aggregate(items: Item[], hero?: string, opts: AggregateOptions = {}): Map<string, number> {
  const map = new Map<string, number>();
  items.forEach((it) => {
    it.attributes.forEach((a) => {
      const v = parseNumeric(a.value);
      map.set(a.type, (map.get(a.type) ?? 0) + v);
    });
  });
  if (hero === "Juno") {
    map.set(
      MEDIBLASTER_OUTPUT_ATTR,
      computeMediblasterOutputFromMap({
        map,
        items: items.map((item) => ({ name: item.name })),
        enemyHasArmor: opts.enemyHasArmor,
      }),
    );
    map.set(TORPEDO_DAMAGE_ATTR, computeJunoTorpedoDamage(items));
  }
  if (opts.metricOutputKeys && opts.metricOutputKeys.size > 0) {
    const context: MetricContext = {
      items,
      map,
      hero: hero ?? "",
      enemyHasArmor: Boolean(opts.enemyHasArmor),
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
  includeMediblasterInputs(set);
  includeTorpedoInputs(set);
  return set;
}

export function buildBreakdown(
  map: Map<string, number>,
  weights: WeightRow[],
  enabled: boolean,
  groups: MinAttrGroup[],
) {
  const attrs = collectRelevantAttributes(weights, enabled, groups);
  const rows: { type: string; sum: number; contrib: number }[] = [];
  weights.forEach((w) => {
    const sum = map.get(w.type) ?? 0;
    rows.push({ type: w.type, sum, contrib: sum * w.weight });
    attrs.delete(w.type);
  });
  attrs.forEach((type) => {
    const sum = map.get(type) ?? 0;
    rows.push({ type, sum, contrib: 0 });
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
