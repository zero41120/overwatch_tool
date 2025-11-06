import { describe, expect, it } from "vitest";

import { computeJunoTorpedoBreakpoints, type TorpedoItem } from "../junoBreakpoints";

describe("computeJunoTorpedoBreakpoints", () => {
  const items: TorpedoItem[] = [
    {
      id: "focus",
      name: "Focus Lens",
      cost: 10000,
      ap: 10,
      baseAdd: 0,
      burn: false,
      hp: 0,
      wp: 0,
      lifesteal: 0,
      dr: 0,
      hps: 0,
    },
    {
      id: "payload",
      name: "Payload Charge",
      cost: 12000,
      ap: 0,
      baseAdd: 20,
      burn: false,
      hp: 0,
      wp: 10,
      lifesteal: 0,
      dr: 0,
      hps: 0,
    },
    {
      id: "nanites",
      name: "Skyline Nanites",
      cost: 14000,
      ap: 0,
      baseAdd: 0,
      burn: true,
      hp: 0,
      wp: 0,
      lifesteal: 0,
      dr: 0,
      hps: 0,
    },
    {
      id: "safety",
      name: "Safety Harness",
      cost: 11000,
      ap: 10,
      baseAdd: 0,
      burn: false,
      hp: 50,
      wp: 0,
      lifesteal: 0,
      dr: 0,
      hps: 0,
    },
  ];

  it("returns rows sorted by budget with damage improvements", () => {
    const result = computeJunoTorpedoBreakpoints(items, {
      baseDamage: 85,
      minCash: 10000,
      maxCash: 50000,
      allowBurn: true,
    });

    expect(result[0].budget).toBe(10000);
    expect(result[0].names).toEqual(["Focus Lens"]);
    expect(result[0].damage).toBeCloseTo(93.5, 1);

    // Including payload increases base damage by 20.
    const combo = result.find(
      (row) => row.names.includes("Payload Charge") && row.names.includes("Focus Lens"),
    );
    expect(combo).toBeDefined();
    expect(combo?.damage).toBeCloseTo(115.5, 1);

    const burnRow = result.find((row) => row.burn);
    expect(burnRow).toBeDefined();
    expect(burnRow?.burn).toBe(true);
    if (combo) {
      expect(burnRow!.damage).toBeGreaterThan(combo.damage);
    }

    const budgets = result.map((row) => row.budget);
    const sortedBudgets = [...budgets].sort((a, b) => a - b);
    expect(budgets).toEqual(sortedBudgets);
  });

  it("uses survival to break ties on equal damage", () => {
    const result = computeJunoTorpedoBreakpoints(items, {
      baseDamage: 85,
      minCash: 10000,
      maxCash: 50000,
      allowBurn: false,
    });

    // Items with equal damage but higher survival should remain.
    const withHarness = result.find((row) => row.names.includes("Safety Harness"));
    expect(withHarness).toBeDefined();
    expect(withHarness?.survival).toBeGreaterThan(0);
  });

  it("respects maxItems when enumerating subsets", () => {
    const result = computeJunoTorpedoBreakpoints(items, {
      baseDamage: 85,
      minCash: 10000,
      maxCash: 50000,
      allowBurn: true,
      maxItems: 1,
    });

    // When only one item is allowed, rows should never contain multiple names.
    expect(result.every((row) => row.names.length === 1)).toBe(true);
  });
});
