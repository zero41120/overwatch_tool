import type { Item, WeightRow } from "../../types";
import { metricOutputKey } from "../../metrics/core/metricRegistry";
import { JUNO_MEDIBLASTER_METRIC_ID } from "../../metrics/JunoMediblasterMetric";
import { aggregate, scoreFromMap } from "../utils";
import { findBestBuilds } from "../optimizerSearch";

describe("findBestBuilds", () => {
  const comboKey = (combo: Item[]) =>
    combo
      .map((item) => item.id)
      .sort()
      .join(",");

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

    const sustainKey = metricOutputKey(JUNO_MEDIBLASTER_METRIC_ID, "sustain");
    const weights: WeightRow[] = [{ type: sustainKey, weight: 1 }];
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

    let expectedScore = -Infinity;
    const expectedBest: Item[][] = [];

    combos.forEach((combo) => {
      const cost = combo.reduce((sum, item) => sum + item.cost, 0);
      if (cost > maxCash) return;
      const map = aggregate([...combo, ...equippedItems], hero, {
        metricOutputKeys: new Set([sustainKey]),
      });
      const score = scoreFromMap(map, weights);
      if (score > expectedScore) {
        expectedScore = score;
        expectedBest.length = 0;
        expectedBest.push(combo);
      } else if (score === expectedScore) {
        expectedBest.push(combo);
      }
    });

    const results = findBestBuilds({
      items: candidates,
      equippedItems,
      weights,
      selectedMetricOutputs: new Set([sustainKey]),
      minValueEnabled: false,
      minAttrGroups: [],
      hero,
      maxItems,
      maxCash,
      attrKeys: ["WP", "AS"],
      extraFields: [],
      costStep: 1,
    });

    const resultKeys = results.map((combo) => comboKey(combo.items)).sort();
    const expectedKeys = expectedBest.map((combo) => comboKey(combo)).sort();
    expect(resultKeys).toEqual(expectedKeys);
    results.forEach((result) => {
      const map = aggregate([...result.items, ...equippedItems], hero, {
        metricOutputKeys: new Set([sustainKey]),
      });
      expect(result.metricValues.WP).toBe(map.get("WP") ?? 0);
    });
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

    let expectedScore = -Infinity;
    const expectedBest: Item[][] = [];

    combos.forEach((combo) => {
      const cost = combo.reduce((sum, item) => sum + item.cost, 0);
      if (cost > maxCash) return;
      const map = aggregate(combo, hero, { metricOutputKeys: selectedMetricOutputs });
      const score = scoreFromMap(map, weights);
      if (score > expectedScore) {
        expectedScore = score;
        expectedBest.length = 0;
        expectedBest.push(combo);
      } else if (score === expectedScore) {
        expectedBest.push(combo);
      }
    });

    const results = findBestBuilds({
      items,
      equippedItems: [],
      weights,
      selectedMetricOutputs,
      minValueEnabled: false,
      minAttrGroups: [],
      hero,
      maxItems,
      maxCash,
      attrKeys: ["WP", "AS", "Weapon Multiplier", "MA"],
      extraFields: [],
      costStep: 1,
    });

    const resultKeys = results.map((combo) => comboKey(combo.items)).sort();
    const expectedKeys = expectedBest.map((combo) => comboKey(combo)).sort();
    expect(resultKeys).toEqual(expectedKeys);
    results.forEach((result) => {
      const map = aggregate(result.items, hero, { metricOutputKeys: selectedMetricOutputs });
      expect(result.metricValues[burstKey]).toBe(map.get(burstKey) ?? 0);
      expect(result.metricValues[sustainKey]).toBe(map.get(sustainKey) ?? 0);
    });
  });

  test("returns all builds tied for the top score", () => {
    const items: Item[] = [
      {
        id: "low",
        name: "Low",
        cost: 5,
        tab: "weapon",
        rarity: "common",
        attributes: [{ type: "WP", value: "10" }],
      },
      {
        id: "high",
        name: "High",
        cost: 15,
        tab: "weapon",
        rarity: "common",
        attributes: [{ type: "WP", value: "10" }],
      },
      {
        id: "other",
        name: "Other",
        cost: 1,
        tab: "weapon",
        rarity: "common",
        attributes: [{ type: "WP", value: "5" }],
      },
    ];

    const results = findBestBuilds({
      items,
      equippedItems: [],
      weights: [{ type: "WP", weight: 1 }],
      selectedMetricOutputs: new Set(),
      minValueEnabled: false,
      minAttrGroups: [],
      hero: "Juno",
      maxItems: 1,
      maxCash: 20,
      attrKeys: ["WP"],
      extraFields: [],
      costStep: 1,
    });

    const resultKeys = results.map((combo) => comboKey(combo.items)).sort();
    expect(resultKeys).toEqual(["high", "low"]);
  });
});
