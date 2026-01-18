import type { Item } from "../../types";
import { JUNO_MEDIBLASTER_METRIC_ID } from "../../metrics/JunoMediblasterMetric";
import { metricOutputKey } from "../../metrics/core/metricRegistry";
import { aggregate } from "../utils";

test("aggregate includes multiple outputs for a metric when selected", () => {
  const items: Item[] = [
    {
      name: "Alpha",
      attributes: [
        { type: "WP", value: "20%" },
        { type: "AS", value: "10%" },
      ],
      cost: 0,
      tab: "weapon",
      rarity: "common",
    },
    {
      name: "Beta",
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
  const sustainKey = metricOutputKey(JUNO_MEDIBLASTER_METRIC_ID, "sustain");
  const map = aggregate(items, "Juno", {
    metricOutputKeys: new Set([burstKey, sustainKey]),
  });
  const burst = map.get(burstKey) ?? 0;
  const sustain = map.get(sustainKey) ?? 0;

  expect(burst).toBeGreaterThan(0);
  expect(sustain).toBeGreaterThan(0);
  expect(burst).toBeGreaterThanOrEqual(sustain);
});
