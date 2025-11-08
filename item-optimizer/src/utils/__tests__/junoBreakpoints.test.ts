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
      baseDamage: 85,
    });

    // With base add included, the flat damage item can be optimal at some budgets.
    expect(rows.map((row) => row.cost)).toEqual([5000, 8500, 9000]);
    expect(rows[0]).toMatchObject({
      budget: 8000,
      cost: 5000,
      names: ["Skyline Nanites"],
    });
    expect(rows[0].damage).toBeCloseTo(118.8, 5);
    expect(rows[1]).toMatchObject({
      budget: 8500,
      cost: 8500,
      names: ["Core Focus Lens", "Pulse Modulator"],
    });
    expect(rows[2]).toMatchObject({
      budget: 9000,
      cost: 9000,
      names: ["Core Focus Lens", "Skyline Nanites"],
    });
  });

  it("uses survival score to break ties", () => {
    // Exclude Skyline to force a damage tie scenario at higher cost
    const noSkyline = baseItems.filter((it) => it.id !== "burn-proc");
    const rows = computeJunoTorpedoBreakpoints(noSkyline, {
      minCash: 8000,
      maxCash: 14000,
      maxItems: 2,
      baseDamage: 85,
    });

    // Armor Plating adds no AP, so damage stays the same; it should still appear
    // only if it ties on damage and improves survival at a higher cost breakpoint.
    expect(rows[0]).toMatchObject({ cost: 4000, names: ["Core Focus Lens"] });
    const tieRow = rows.find((row) => row.cost === 8200);
    expect(tieRow).toBeDefined();
    expect(tieRow?.names).toEqual(["Core Focus Lens", "Armor Plating"]);
    // no burn field anymore; Skyline bonus handled internally by name
  });

  it("returns empty list when no combinations exist", () => {
    const rows = computeJunoTorpedoBreakpoints([], { minCash: 5000, maxCash: 6000 });
    expect(rows).toEqual([]);
  });
});
