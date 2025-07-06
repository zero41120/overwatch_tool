import { rankBestCombos } from "../utils";

describe("rankBestCombos", () => {
  test("cheapest build is preferred when slots remain", () => {
    const combos = [
      { cost: 100, score: 10 },
      { cost: 80, score: 10 },
      { cost: 90, score: 10 },
    ];
    const { best, alternatives } = rankBestCombos(combos, false);
    expect(best.cost).toBe(80);
    expect(alternatives.map((c) => c.cost)).toEqual([90, 100]);
  });

  test("most expensive build is preferred when slots full", () => {
    const combos = [
      { cost: 100, score: 20 },
      { cost: 120, score: 20 },
      { cost: 80, score: 20 },
    ];
    const { best, alternatives } = rankBestCombos(combos, true);
    expect(best.cost).toBe(120);
    expect(alternatives.map((c) => c.cost)).toEqual([100, 80]);
  });
});
