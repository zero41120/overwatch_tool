import type { Item, MinAttrGroup, ResultCombo, WeightRow } from "../types";
import { MEDIBLASTER_OUTPUT_ATTR } from "./junoMediblaster";
import { TORPEDO_DAMAGE_ATTR } from "./junoTorpedoDamage";
import { aggregate, collectRelevantAttributes, meetsMinGroups, scoreFromMap } from "./utils";
import { buildOptimizerProfiles } from "./optimizerPareto";

export type OptimizerSearchOptions = {
  items: Item[];
  equippedItems: Item[];
  weights: WeightRow[];
  minValueEnabled: boolean;
  minAttrGroups: MinAttrGroup[];
  hero?: string;
  enemyHasArmor?: boolean;
  maxItems: number;
  maxCash: number;
  preferHighCost: boolean;
  costStep?: number;
  maxFrontier?: number;
};

type ScoredCombo = ResultCombo & { breakdown: { type: string; sum: number; contrib: number }[] };

function compareCombos(a: ResultCombo, b: ResultCombo, preferHighCost: boolean) {
  if (a.score !== b.score) return a.score > b.score;
  return preferHighCost ? a.cost > b.cost : a.cost < b.cost;
}

function evaluateProfiles(options: OptimizerSearchOptions): ScoredCombo[] {
  if (options.maxItems === 0) {
    const map = aggregate(options.equippedItems, options.hero, {
      enemyHasArmor: options.enemyHasArmor,
    });
    if (
      options.minValueEnabled &&
      !meetsMinGroups(options.equippedItems, options.minAttrGroups, options.hero, {
        enemyHasArmor: options.enemyHasArmor,
      })
    ) {
      return [];
    }
    return [
      {
        items: [],
        cost: 0,
        score: scoreFromMap(map, options.weights),
        breakdown: [],
      },
    ];
  }

  const relevantAttrs = collectRelevantAttributes(
    options.weights,
    options.minValueEnabled,
    options.minAttrGroups,
  );
  const considerMediblaster = relevantAttrs.has(MEDIBLASTER_OUTPUT_ATTR) && Boolean(options.enemyHasArmor);
  const considerTorpedo = relevantAttrs.has(TORPEDO_DAMAGE_ATTR);
  const attrKeys = Array.from(relevantAttrs).filter(
    (attr) => attr !== MEDIBLASTER_OUTPUT_ATTR && attr !== TORPEDO_DAMAGE_ATTR,
  );

  const profiles = buildOptimizerProfiles(options.items, {
    maxItems: options.maxItems,
    maxCash: options.maxCash,
    costStep: options.costStep ?? 250,
    maxFrontier: options.maxFrontier,
    attrKeys,
    considerTorpedo,
    considerMediblaster,
  });

  const combos: ScoredCombo[] = [];
  profiles.forEach((profile) => {
    if (profile.cost > options.maxCash) return;
    const selected = profile.indices.map((idx) => options.items[idx]);
    const combined = [...selected, ...options.equippedItems];
    if (
      options.minValueEnabled &&
      !meetsMinGroups(combined, options.minAttrGroups, options.hero, {
        enemyHasArmor: options.enemyHasArmor,
      })
    ) {
      return;
    }
    const map = aggregate(combined, options.hero, { enemyHasArmor: options.enemyHasArmor });
    combos.push({
      items: selected,
      cost: profile.cost,
      score: scoreFromMap(map, options.weights),
      breakdown: [],
    });
  });

  return combos;
}

export function findBestBuild(options: OptimizerSearchOptions): ResultCombo | null {
  const combos = evaluateProfiles(options);
  if (combos.length === 0) return null;
  return combos.reduce((best, next) => (compareCombos(next, best, options.preferHighCost) ? next : best));
}

export function findBestBuildsByBudget(
  options: OptimizerSearchOptions & { budgets: number[] },
): ResultCombo[] {
  const combos = evaluateProfiles(options).sort((a, b) => a.cost - b.cost);
  if (combos.length === 0) return [];
  const results: ResultCombo[] = [];
  let currentBest: ResultCombo | null = null;
  let idx = 0;
  options.budgets.forEach((budget) => {
    while (idx < combos.length && combos[idx].cost <= budget) {
      const candidate = combos[idx];
      if (!currentBest || compareCombos(candidate, currentBest, options.preferHighCost)) {
        currentBest = candidate;
      }
      idx += 1;
    }
    if (currentBest) {
      results.push(currentBest);
    }
  });
  return results;
}
