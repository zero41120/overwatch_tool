import type { Item, MinAttrGroup, WeightRow } from "../types";
import type { MetricInputValuesByMetric } from "../metrics/core/metricRegistry";
import { aggregate, buildBreakdown, metricValuesFromMap, scoreFromMap } from "./utils";

export type ScoreBuildOptions = {
  items: Item[];
  hero?: string;
  heroPowers?: string[];
  weights: WeightRow[];
  minValueEnabled: boolean;
  minAttrGroups: MinAttrGroup[];
  metricOutputKeys?: Set<string>;
  metricInputValues?: MetricInputValuesByMetric;
};

export function scoreBuild(options: ScoreBuildOptions) {
  const map = aggregate(options.items, options.hero, {
    metricOutputKeys: options.metricOutputKeys,
    metricInputValues: options.metricInputValues,
    heroPowers: options.heroPowers,
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
