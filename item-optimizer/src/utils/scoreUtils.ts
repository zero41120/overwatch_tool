import type { Item, MinAttrGroup, WeightRow } from "../types";
import type { MetricInputValuesByMetric } from "../metrics/metricRegistry";
import { aggregate, buildBreakdown, metricValuesFromMap, scoreFromMap } from "./utils";

export type ScoreBuildOptions = {
  items: Item[];
  hero?: string;
  weights: WeightRow[];
  minValueEnabled: boolean;
  minAttrGroups: MinAttrGroup[];
  enemyHasArmor?: boolean;
  metricOutputKeys?: Set<string>;
  metricInputValues?: MetricInputValuesByMetric;
};

export function scoreBuild(options: ScoreBuildOptions) {
  const map = aggregate(options.items, options.hero, {
    enemyHasArmor: options.enemyHasArmor,
    metricOutputKeys: options.metricOutputKeys,
    metricInputValues: options.metricInputValues,
  });
  return {
    map,
    metricValues: metricValuesFromMap(map),
    score: scoreFromMap(map, options.weights),
    breakdown: buildBreakdown(
      map,
      options.weights,
      options.minValueEnabled,
      options.minAttrGroups,
      options.hero,
    ),
  };
}
