import type { Item, WeightRow } from "../../types";
import { metricOutputKey } from "../../metrics/metricRegistry";
import { JUNO_MEDIBLASTER_METRIC_ID } from "../../metrics/JunoMediblasterMetric";
import { aggregate, scoreFromMap } from "../utils";
import { findBestBuild } from "../optimizerSearch";

describe("findBestBuild", () => {
  test("selects the optimal build with equipped and avoid items", () => {
    const items: Item[] = [
      {
        id: "a",
        name: "Item A",
        cost: 5,
        tab: "weapon",
        rarity: "common",
        attributes: [
          { type: "WP", value: "20" },
          { type: "AS", value: "1" },
        ],
      },
      {
        id: "b",
        name: "Item B",
        cost: 5,
        tab: "weapon",
        rarity: "common",
        attributes: [
          { type: "WP", value: "1" },
          { type: "AS", value: "25" },
        ],
      },
      {
        id: "c",
        name: "Item C",
        cost: 5,
        tab: "weapon",
        rarity: "common",
        attributes: [
          { type: "WP", value: "15" },
          { type: "AS", value: "5" },
        ],
      },
      {
        id: "d",
        name: "Item D",
        cost: 5,
        tab: "weapon",
        rarity: "common",
        attributes: [
          { type: "WP", value: "5" },
          { type: "AS", value: "10" },
        ],
      },
    ];

    const equippedItems: Item[] = [
      {
        id: "eq",
        name: "Equipped",
        cost: 0,
        tab: "weapon",
        rarity: "common",
        attributes: [{ type: "WP", value: "5" }],
      },
    ];

    const avoid = new Set(["c"]);
    const candidates = items.filter((item) => !avoid.has(item.id ?? ""));

    const weights: WeightRow[] = [{ type: "Mediblaster Output", weight: 1 }];
    const hero = "Juno";
    const maxItems = 2;
    const maxCash = 10;

    const combos: Item[][] = [[]];
    candidates.forEach((item) => {
      const current = combos.slice();
      current.forEach((combo) => {
        if (combo.length < maxItems) combos.push([...combo, item]);
      });
    });

    let expectedBest: Item[] = [];
    let expectedScore = -Infinity;
    let expectedCost = 0;

    combos.forEach((combo) => {
      const cost = combo.reduce((sum, item) => sum + item.cost, 0);
      if (cost > maxCash) return;
      const map = aggregate([...combo, ...equippedItems], hero);
      const score = scoreFromMap(map, weights);
      if (score > expectedScore || (score === expectedScore && cost < expectedCost)) {
        expectedScore = score;
        expectedCost = cost;
        expectedBest = combo;
      }
    });

    const result = findBestBuild({
      items: candidates,
      equippedItems,
      weights,
      selectedMetricOutputs: new Set(),
      minValueEnabled: false,
      minAttrGroups: [],
      hero,
      maxItems,
      maxCash,
      preferHighCost: false,
      attrKeys: ["WP", "AS"],
      extraFields: [],
      costStep: 1,
    });

    const resultIds = result?.items.map((item) => item.id).sort();
    const expectedIds = expectedBest.map((item) => item.id).sort();
    expect(resultIds).toEqual(expectedIds);
  });

  test("uses selected metric outputs and weights when scoring builds", () => {
    const items: Item[] = [
      {
        id: "low",
        name: "Low Stats",
        cost: 5,
        tab: "weapon",
        rarity: "common",
        attributes: [{ type: "WP", value: "5" }],
      },
      {
        id: "mid",
        name: "Mid Stats",
        cost: 5,
        tab: "weapon",
        rarity: "common",
        attributes: [
          { type: "WP", value: "15" },
          { type: "AS", value: "5" },
        ],
      },
      {
        id: "high",
        name: "High Stats",
        cost: 5,
        tab: "weapon",
        rarity: "common",
        attributes: [
          { type: "WP", value: "30" },
          { type: "AS", value: "10" },
          { type: "Weapon Multiplier", value: "10" },
        ],
      },
    ];

    const burstKey = metricOutputKey(JUNO_MEDIBLASTER_METRIC_ID, "burst");
    const sustainKey = metricOutputKey(JUNO_MEDIBLASTER_METRIC_ID, "sustain");
    const selectedMetricOutputs = new Set([burstKey, sustainKey]);
    const weights: WeightRow[] = [
      { type: burstKey, weight: 1 },
      { type: sustainKey, weight: 2 },
    ];
    const hero = "Juno";
    const maxItems = 1;
    const maxCash = 10;

    const combos: Item[][] = [[]];
    items.forEach((item) => combos.push([item]));

    let expectedBest: Item[] = [];
    let expectedScore = -Infinity;
    let expectedCost = Number.POSITIVE_INFINITY;

    combos.forEach((combo) => {
      const cost = combo.reduce((sum, item) => sum + item.cost, 0);
      if (cost > maxCash) return;
      const map = aggregate(combo, hero, { metricOutputKeys: selectedMetricOutputs });
      const score = scoreFromMap(map, weights);
      if (score > expectedScore || (score === expectedScore && cost < expectedCost)) {
        expectedScore = score;
        expectedCost = cost;
        expectedBest = combo;
      }
    });

    const result = findBestBuild({
      items,
      equippedItems: [],
      weights,
      selectedMetricOutputs,
      minValueEnabled: false,
      minAttrGroups: [],
      hero,
      maxItems,
      maxCash,
      preferHighCost: false,
      attrKeys: ["WP", "AS", "Weapon Multiplier", "MA"],
      extraFields: [],
      costStep: 1,
    });

    const resultIds = result?.items.map((item) => item.id).sort();
    const expectedIds = expectedBest.map((item) => item.id).sort();
    expect(resultIds).toEqual(expectedIds);
  });
});
