import type { Item, WeightRow } from "../../types";
import { JUNO_MEDIBLASTER_METRIC_ID } from "../../metrics/JunoMediblasterMetric";
import { metricOutputKey } from "../../metrics/metricRegistry";
import { TORPEDO_DAMAGE_ATTR } from "../junoTorpedoDamage";
import { buildOptimizerProfileInputs } from "../optimizerProfileInputs";

const baseItems: Item[] = [
  {
    id: "a",
    name: "Skyline Nanites",
    cost: 5,
    tab: "weapon",
    rarity: "common",
    attributes: [{ type: "AP", value: "10" }],
  },
  {
    id: "b",
    name: "Codebreaker",
    cost: 5,
    tab: "weapon",
    rarity: "common",
    attributes: [{ type: "WP", value: "5" }],
  },
];

test("buildOptimizerProfileInputs adds torpedo extras for torpedo output", () => {
  const weights: WeightRow[] = [
    { type: "AP", weight: 1 },
    { type: TORPEDO_DAMAGE_ATTR, weight: 1 },
  ];
  const selectedMetricOutputs = new Set<string>();
  const { attrKeys, extraFields } = buildOptimizerProfileInputs({
    items: baseItems,
    weights,
    selectedMetricOutputs,
    minValueEnabled: false,
    minAttrGroups: [],
    hero: "Juno",
  });

  expect(attrKeys).toContain("AP");
  expect(attrKeys).not.toContain(TORPEDO_DAMAGE_ATTR);
  const ids = extraFields.map((field) => field.id);
  expect(ids).toEqual(expect.arrayContaining(["torpedo-base-add", "torpedo-skyline"]));
});

test("buildOptimizerProfileInputs adds mediblaster extras for metric outputs with armor", () => {
  const mediblasterKey = metricOutputKey(JUNO_MEDIBLASTER_METRIC_ID, "burst");
  const weights: WeightRow[] = [{ type: mediblasterKey, weight: 1 }];
  const selectedMetricOutputs = new Set([mediblasterKey]);
  const { extraFields } = buildOptimizerProfileInputs({
    items: baseItems,
    weights,
    selectedMetricOutputs,
    minValueEnabled: false,
    minAttrGroups: [],
    hero: "Juno",
    enemyHasArmor: true,
  });

  const ids = extraFields.map((field) => field.id);
  expect(ids).toContain("mediblaster-codebreaker");
});
