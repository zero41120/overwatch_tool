import { describe, expect, it } from "vitest";

import { computeJunoTorpedoBreakpoints, type JunoItem } from "../junoBreakpoints";

const baseItems: JunoItem[] = [
  {
    id: "ap",
    name: "Ability Power Booster",
    cost: 1000,
    ap: 10,
    baseAdd: 0,
    burn: false,
    hp: 0,
    wp: 0,
    lifesteal: 0,
    dr: 0,
    hps: 0,
    situational: false,
  },
  {
    id: "flat",
    name: "Flat Damage",
    cost: 1500,
    ap: 0,
    baseAdd: 20,
    burn: false,
    hp: 0,
    wp: 0,
    lifesteal: 0,
    dr: 0,
    hps: 0,
    situational: false,
  },
  {
    id: "burn",
    name: "Skyline Nanites",
    cost: 2000,
    ap: 0,
    baseAdd: 0,
    burn: true,
    hp: 0,
    wp: 0,
    lifesteal: 0,
    dr: 0,
    hps: 0,
    situational: true,
  },
  {
    id: "survival",
    name: "Survival Matrix",
    cost: 2000,
    ap: 0,
    baseAdd: 0,
    burn: false,
    hp: 50,
    wp: 0,
    lifesteal: 0,
    dr: 0,
    hps: 0,
    situational: false,
  },
];

describe("computeJunoTorpedoBreakpoints", () => {
  it("returns breakpoints ordered by budget", () => {
    const rows = computeJunoTorpedoBreakpoints(baseItems, {
      minCash: 1000,
      maxCash: 5000,
      baseDamage: 85,
      maxItems: 3,
      allowBurn: true,
    });
    expect(rows.map((r) => r.budget)).toEqual([1000, 1500, 2500, 3500, 4500]);
    const best = rows[rows.length - 1];
    expect(best.damage).toBeCloseTo(138.6, 3);
    expect(best.burn).toBe(true);
    expect(best.names.sort()).toEqual(["Ability Power Booster", "Flat Damage", "Skyline Nanites"].sort());
  });

  it("prefers higher survival when damage ties", () => {
    const items: JunoItem[] = [
      {
        ...baseItems[1],
        id: "flat-1",
        name: "Flat Damage A",
      },
      {
        ...baseItems[1],
        id: "flat-2",
        name: "Flat Damage B",
        hp: 40,
      },
    ];
    const rows = computeJunoTorpedoBreakpoints(items, {
      minCash: 1500,
      maxCash: 1500,
      allowBurn: false,
    });
    expect(rows).toHaveLength(1);
    expect(rows[0].names).toEqual(["Flat Damage B"]);
  });

  it("disables burn bonus when allowBurn is false", () => {
    const rows = computeJunoTorpedoBreakpoints([baseItems[2]], {
      minCash: 2000,
      maxCash: 2000,
      allowBurn: false,
    });
    expect(rows).toHaveLength(1);
    expect(rows[0].damage).toBeCloseTo(85);
    expect(rows[0].burn).toBe(false);
  });
});
