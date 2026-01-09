import type { Item, WeightRow } from "../../types";
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
      minValueEnabled: false,
      minAttrGroups: [],
      hero,
      maxItems,
      maxCash,
      preferHighCost: false,
      costStep: 1,
    });

    const resultIds = result?.items.map((item) => item.id).sort();
    const expectedIds = expectedBest.map((item) => item.id).sort();
    expect(resultIds).toEqual(expectedIds);
  });
});
