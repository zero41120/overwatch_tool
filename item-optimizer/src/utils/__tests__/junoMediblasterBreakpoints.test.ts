import { computeJunoMediblasterBreakpoints } from "../junoMediblasterBreakpoints";
import type { MediblasterItem } from "../junoMediblasterItems";

describe("computeJunoMediblasterBreakpoints", () => {
  test("keeps non-linear synergies via Pareto frontier pruning", () => {
    const items: MediblasterItem[] = [
      {
        id: "A",
        name: "Item A",
        cost: 5,
        wp: 10,
        as: 1,
        weaponMultiplier: 0,
        ma: 0,
        hp: 0,
        lifesteal: 0,
        dr: 0,
        hps: 0,
        situational: false,
      },
      {
        id: "B",
        name: "Item B",
        cost: 5,
        wp: 10,
        as: 1,
        weaponMultiplier: 0,
        ma: 0,
        hp: 0,
        lifesteal: 0,
        dr: 0,
        hps: 0,
        situational: false,
      },
      {
        id: "C",
        name: "Item C",
        cost: 5,
        wp: 10,
        as: 1,
        weaponMultiplier: 0,
        ma: 0,
        hp: 0,
        lifesteal: 0,
        dr: 0,
        hps: 0,
        situational: false,
      },
      {
        id: "D",
        name: "Item D",
        cost: 5,
        wp: 1,
        as: 8,
        weaponMultiplier: 0,
        ma: 0,
        hp: 0,
        lifesteal: 0,
        dr: 0,
        hps: 0,
        situational: false,
      },
    ];

    const rows = computeJunoMediblasterBreakpoints(items, {
      minCash: 0,
      maxCash: 10,
      maxItems: 2,
      costStep: 1,
      computeOutput: ({ map }) => (map.get("WP") ?? 0) * (map.get("AS") ?? 0),
    });

    const best = rows.find((row) => row.budget === 10);
    expect(best).toBeDefined();
    expect(best?.output).toBe(99);
    expect(best?.names).toEqual(expect.arrayContaining(["Item A", "Item D"]));
  });
});
