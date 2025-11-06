import { describe, expect, it } from "vitest";

import {
  computeJunoTorpedoBreakpoints,
  type TorpedoItem,
} from "../junoBreakpoints";

describe("computeJunoTorpedoBreakpoints", () => {
  const baseItems: TorpedoItem[] = [
    {
      id: "core-ap",
      name: "Core Focus Lens",
      cost: 4000,
      ap: 20,
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
      id: "flat-dmg",
      name: "Pulse Modulator",
      cost: 4500,
      ap: 0,
      baseAdd: 15,
      burn: false,
      hp: 0,
      wp: 0,
      lifesteal: 0,
      dr: 0,
      hps: 0,
      situational: false,
    },
    {
      id: "burn-proc",
      name: "Skyline Nanites",
      cost: 5000,
      ap: 10,
      baseAdd: 5,
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
      name: "Armor Plating",
      cost: 4200,
      ap: 0,
      baseAdd: 0,
      burn: false,
      hp: 20,
      wp: 0,
      lifesteal: 0,
      dr: 10,
      hps: 0,
      situational: false,
    },
  ];

  it("prefers higher damage combos within cash range", () => {
    const rows = computeJunoTorpedoBreakpoints(baseItems.slice(0, 3), {
      minCash: 8000,
      maxCash: 15000,
      maxItems: 2,
      allowBurn: true,
      baseDamage: 85,
    });

    expect(rows.map((row) => row.cost)).toEqual([5000, 8500, 9000]);
    expect(rows[0]).toMatchObject({
      budget: 8000,
      cost: 5000,
      names: ["Skyline Nanites"],
      burn: true,
    });
    expect(rows[0].damage).toBeCloseTo(118.8, 5);
    expect(rows[1]).toMatchObject({
      budget: 8500,
      cost: 8500,
      burn: false,
      names: ["Core Focus Lens", "Pulse Modulator"],
    });
    expect(rows[2]).toMatchObject({
      budget: 9000,
      cost: 9000,
      burn: true,
      names: ["Core Focus Lens", "Skyline Nanites"],
    });
  });

  it("uses survival score to break ties", () => {
    const rows = computeJunoTorpedoBreakpoints(baseItems, {
      minCash: 8000,
      maxCash: 14000,
      maxItems: 2,
      allowBurn: false,
      baseDamage: 85,
    });

    expect(rows[0]).toMatchObject({
      cost: 4000,
      names: ["Core Focus Lens"],
    });
    const tieRow = rows.find((row) => row.cost === 8200);
    expect(tieRow).toBeDefined();
    expect(tieRow?.names).toEqual(["Core Focus Lens", "Armor Plating"]);
    expect(tieRow?.burn).toBe(false);
  });

  it("returns empty list when no combinations exist", () => {
    const rows = computeJunoTorpedoBreakpoints([], { minCash: 5000, maxCash: 6000 });
    expect(rows).toEqual([]);
  });
});
