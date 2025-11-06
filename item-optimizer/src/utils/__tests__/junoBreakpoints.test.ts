import { describe, expect, it } from "vitest";

import type { Item } from "../../types";
import { computeJunoTorpedoBreakpoints } from "../junoBreakpoints";
import { normalizeTorpedoItems } from "../junoItems";
import type { TorpedoItem } from "../junoTypes";

describe("normalizeTorpedoItems", () => {
  it("extracts torpedo-relevant ability items and prioritizes situational ones", () => {
    const items: Item[] = [
      {
        id: "a",
        name: "Pulsar Destroyers",
        cost: 10000,
        tab: "ability",
        rarity: "common",
        attributes: [
          {
            type: "description",
            value: "<b>[Pulsar Torpedoes]</b> explode on hit, dealing <b class=\"stat-ap\">20</b> damage.",
          },
        ],
      },
      {
        id: "b",
        name: "Mark of the Kitsune",
        cost: 11000,
        tab: "ability",
        rarity: "common",
        attributes: [
          { type: "AP", value: "10%" },
        ],
      },
      {
        id: "c",
        name: "Support Stock",
        cost: 9000,
        tab: "ability",
        rarity: "common",
        attributes: [
          { type: "Health", value: "50" },
        ],
      },
      {
        id: "d",
        name: "Unrelated Weapon",
        cost: 5000,
        tab: "weapon",
        rarity: "common",
        attributes: [
          { type: "AP", value: "15%" },
        ],
      },
    ];

    const normalized = normalizeTorpedoItems(items);
    expect(normalized).toHaveLength(3);
    expect(normalized[0].name).toBe("Pulsar Destroyers");
    expect(normalized[0].baseAdd).toBe(20);
    expect(normalized[0].situational).toBe(true);
    expect(normalized[1].name).toBe("Mark of the Kitsune");
    expect(normalized[1].ap).toBe(10);
    expect(normalized[2].name).toBe("Support Stock");
    expect(normalized[2].hp).toBe(50);
  });
});

describe("computeJunoTorpedoBreakpoints", () => {
  const items: TorpedoItem[] = [
    {
      id: "a",
      name: "AP Module",
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
      id: "b",
      name: "Burn Rockets",
      cost: 2000,
      ap: 0,
      baseAdd: 20,
      burn: true,
      hp: 0,
      wp: 0,
      lifesteal: 0,
      dr: 0,
      hps: 0,
      situational: false,
    },
    {
      id: "c",
      name: "Shield Pack",
      cost: 3000,
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

  it("selects breakpoints that improve damage or survival", () => {
    const rows = computeJunoTorpedoBreakpoints(items, {
      baseDamage: 85,
      minCash: 1000,
      maxCash: 6000,
      maxItems: 2,
      allowBurn: true,
    });

    expect(rows).toHaveLength(3);
    expect(rows[0].budget).toBe(1000);
    expect(rows[0].names).toEqual(["AP Module"]);
    expect(rows[1].budget).toBe(2000);
    expect(rows[1].names).toEqual(["Burn Rockets"]);
    expect(rows[1].damage).toBeCloseTo(126);
    expect(rows[2].budget).toBe(3000);
    expect(rows[2].names.sort()).toEqual(["AP Module", "Burn Rockets"].sort());
    expect(rows[2].damage).toBeCloseTo(138.6, 1);
  });

  it("disables burn multiplier when requested", () => {
    const rows = computeJunoTorpedoBreakpoints(items, {
      baseDamage: 85,
      minCash: 1000,
      maxCash: 6000,
      maxItems: 2,
      allowBurn: false,
    });

    const burnRow = rows.find((r) => r.names.includes("Burn Rockets"));
    expect(burnRow?.damage).toBeCloseTo(105);
    expect(burnRow?.burn).toBe(false);
  });
});
