import { describe, expect, it } from "vitest";

import type { Item } from "../../types";
import { buildJunoTorpedoItems, toJunoTorpedoItem } from "../junoItems";

describe("Juno torpedo item mapping", () => {
  const baseItem: Item = {
    id: "kit",
    name: "Mark of the Kitsune",
    cost: 11000,
    tab: "ability",
    rarity: "epic",
    attributes: [
      { type: "AP", value: "10%" },
      {
        type: "description",
        value:
          "When you use an ability, your next instance of Weapon Damage or Healing deals <b class=\"stat-ap\">25</b> bonus damage or healing.",
      },
    ],
  };

  it("extracts AP and base damage bonuses", () => {
    const mapped = toJunoTorpedoItem(baseItem);
    expect(mapped).not.toBeNull();
    expect(mapped?.ap).toBe(10);
    expect(mapped?.baseAdd).toBe(25);
    expect(mapped?.situational).toBe(true);
  });

  it("marks burn items based on descriptions", () => {
    const burnItem: Item = {
      ...baseItem,
      id: "nanites",
      name: "Skyline Nanites",
      cost: 14000,
      attributes: [
        { type: "AP", value: "5%" },
        { type: "description", value: "Burn enemies hit by <b>[Pulsar Torpedoes]</b>." },
      ],
    };

    const mapped = toJunoTorpedoItem(burnItem);
    expect(mapped?.burn).toBe(true);
  });

  it("filters out items with no relevant stats", () => {
    const empty: Item = {
      ...baseItem,
      id: "flavor",
      name: "Flavor Text",
      attributes: [{ type: "description", value: "Purely cosmetic." }],
    };

    expect(toJunoTorpedoItem(empty)).toBeNull();
  });

  it("sorts situational items to the top", () => {
    const regular: Item = {
      ...baseItem,
      id: "kit2",
      name: "Champion's Kit",
      cost: 14000,
      attributes: [{ type: "AP", value: "35%" }],
    };

    const items = buildJunoTorpedoItems([regular, baseItem]);
    expect(items[0].name).toBe("Mark of the Kitsune");
    expect(items[1].name).toBe("Champion's Kit");
  });
});
