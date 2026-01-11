import type { Item, WeightRow } from "../../types";
import { JUNO_MEDIBLASTER_METRIC_ID } from "../../metrics/JunoMediblasterMetric";
import { metricOutputKey } from "../../metrics/metricRegistry";
import { aggregate, buildBreakdown, scoreFromMap } from "../utils";
import { scoreBuild } from "../scoreUtils";

describe("scoreBuild", () => {
  test("computes weighted scores and breakdowns for metric outputs", () => {
    const items: Item[] = [
      {
        name: "A",
        attributes: [
          { type: "WP", value: "20%" },
          { type: "AS", value: "10%" },
        ],
        cost: 0,
        tab: "weapon",
        rarity: "common",
      },
      {
        name: "B",
        attributes: [
          { type: "Weapon Multiplier", value: "15%" },
          { type: "MA", value: "25%" },
        ],
        cost: 0,
        tab: "weapon",
        rarity: "common",
      },
    ];

    const burstKey = metricOutputKey(JUNO_MEDIBLASTER_METRIC_ID, "burst");
    const selectedMetricOutputs = new Set([burstKey]);
    const weights: WeightRow[] = [{ type: burstKey, weight: 1.25 }];
    const expectedMap = aggregate(items, "Juno", { metricOutputKeys: selectedMetricOutputs });
    const expectedScore = scoreFromMap(expectedMap, weights);
    const expectedBreakdown = buildBreakdown(expectedMap, weights, false, []);

    const result = scoreBuild({
      items,
      hero: "Juno",
      weights,
      minValueEnabled: false,
      minAttrGroups: [],
      metricOutputKeys: selectedMetricOutputs,
    });

    expect(result.score).toBeCloseTo(expectedScore);
    expect(result.metricValues[burstKey]).toBe(expectedMap.get(burstKey) ?? 0);
    expect(result.breakdown).toEqual(expectedBreakdown);
    const row = result.breakdown.find((entry) => entry.type === burstKey);
    expect(row?.contrib).toBeCloseTo((expectedMap.get(burstKey) ?? 0) * weights[0].weight);
  });
});
