import type { Item, MinAttrGroup, ResultCombo, WeightRow } from "../types";
import type { MetricInputValuesByMetric } from "../metrics/core/metricRegistry";
import { aggregate, meetsMinGroups, metricValuesFromMap, scoreFromMap } from "./utils";
import { buildOptimizerProfiles } from "./optimizerPareto";
import type { OptimizerExtraField } from "./optimizerParetoTypes";

export type OptimizerSearchOptions = {
  items: Item[];
  equippedItems: Item[];
  weights: WeightRow[];
  selectedMetricOutputs: Set<string>;
  minValueEnabled: boolean;
  minAttrGroups: MinAttrGroup[];
  hero?: string;
  metricInputValues?: MetricInputValuesByMetric;
  maxItems: number;
  maxCash: number;
  attrKeys: string[];
  extraFields?: OptimizerExtraField[];
  costStep?: number;
  maxFrontier?: number;
};

type ScoredCombo = ResultCombo;

function evaluateProfiles(options: OptimizerSearchOptions): ScoredCombo[] {
  const selectedMetricOutputs = options.selectedMetricOutputs;
  if (options.maxItems === 0) {
    const map = aggregate(options.equippedItems, options.hero, {
      metricOutputKeys: selectedMetricOutputs,
      metricInputValues: options.metricInputValues,
    });
    const metricValues = metricValuesFromMap(map);
    if (
      options.minValueEnabled &&
      !meetsMinGroups(options.equippedItems, options.minAttrGroups, options.hero, {
        metricInputValues: options.metricInputValues,
      })
    ) {
      return [];
    }
    return [
      {
        items: [],
        cost: 0,
        score: scoreFromMap(map, options.weights),
        metricValues,
        breakdown: [],
      },
    ];
  }

  const profiles = buildOptimizerProfiles(options.items, {
    maxItems: options.maxItems,
    maxCash: options.maxCash,
    costStep: options.costStep ?? 250,
    maxFrontier: options.maxFrontier,
    attrKeys: options.attrKeys,
    extraFields: options.extraFields,
  });

  const combos: ScoredCombo[] = [];
  profiles.forEach((profile) => {
    if (profile.cost > options.maxCash) return;
    const selected = profile.indices.map((idx) => options.items[idx]);
    const combined = [...selected, ...options.equippedItems];
    if (
      options.minValueEnabled &&
      !meetsMinGroups(combined, options.minAttrGroups, options.hero, {
        metricInputValues: options.metricInputValues,
      })
    ) {
      return;
    }
    const map = aggregate(combined, options.hero, {
      metricOutputKeys: selectedMetricOutputs,
      metricInputValues: options.metricInputValues,
    });
    combos.push({
      items: selected,
      cost: profile.cost,
      score: scoreFromMap(map, options.weights),
      metricValues: metricValuesFromMap(map),
      breakdown: [],
    });
  });

  return combos;
}

export function findBestBuilds(options: OptimizerSearchOptions): ResultCombo[] {
  const combos = evaluateProfiles(options);
  if (combos.length === 0) return [];
  let bestScore = -Infinity;
  const best: ResultCombo[] = [];
  combos.forEach((combo) => {
    if (combo.score > bestScore) {
      bestScore = combo.score;
      best.length = 0;
      best.push(combo);
      return;
    }
    if (combo.score === bestScore) {
      best.push(combo);
    }
  });
  return best;
}

export function findBestBuildsByBudget(
  options: OptimizerSearchOptions & { budgets: number[] },
): ResultCombo[] {
  const combos = evaluateProfiles(options).sort((a, b) => a.cost - b.cost);
  if (combos.length === 0) return [];
  const results: ResultCombo[] = [];
  let currentBestScore = -Infinity;
  let currentBest: ResultCombo[] = [];
  let idx = 0;
  options.budgets.forEach((budget) => {
    while (idx < combos.length && combos[idx].cost <= budget) {
      const candidate = combos[idx];
      if (candidate.score > currentBestScore) {
        currentBestScore = candidate.score;
        currentBest = [candidate];
      } else if (candidate.score === currentBestScore) {
        currentBest.push(candidate);
      }
      idx += 1;
    }
    if (currentBest.length > 0) {
      results.push(...currentBest);
    }
  });
  return results;
}
