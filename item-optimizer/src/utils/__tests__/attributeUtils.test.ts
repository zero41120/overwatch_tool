import { describe, expect, it } from "vitest";
import { ALL_HEROES, NO_HERO, type Item } from "../../types";
import { collectAttributeCountsForHero, collectAttributeTypes, collectAttributeTypesForHero } from "../attributeUtils";
import { MEDIBLASTER_OUTPUT_ATTR } from "../junoMediblaster";
import { TORPEDO_DAMAGE_ATTR } from "../junoTorpedoDamage";

describe("collectAttributeTypes", () => {
  it("keeps override-only attributes available for weighting", () => {
    const items: Item[] = [
      {
        name: "Vantage Shot",
        attributes: [
          { type: "WP", value: "5%" },
          { type: "Weapon Multiplier", value: "15%" },
        ],
        cost: 4000,
        tab: "weapon",
        rarity: "rare",
      },
      {
        name: "Gamma Core",
        attributes: [
          { type: "AP", value: "10%" },
          { type: "description", value: "ignore" },
          { type: "Editor's Note", value: "ignore" },
        ],
        cost: 1200,
        tab: "ability",
        rarity: "common",
      },
    ];

    expect(collectAttributeTypes(items)).toEqual(["WP", "AP", "Weapon Multiplier"]);
  });

  it("limits attribute options to items the hero can equip", () => {
    const items: Item[] = [
      {
        name: "Juno Item",
        character: "Juno",
        attributes: [
          { type: "WP", value: "5%" },
          { type: "Weapon Multiplier", value: "15%" },
        ],
        cost: 4000,
        tab: "weapon",
        rarity: "rare",
      },
      {
        name: "Tracer Item",
        character: "Tracer",
        attributes: [{ type: "Blink Power", value: "10%" }],
        cost: 3200,
        tab: "weapon",
        rarity: "rare",
      },
      {
        name: "Universal",
        attributes: [{ type: "Health", value: "100" }],
        cost: 1000,
        tab: "survival",
        rarity: "common",
      },
    ];

    expect(collectAttributeTypesForHero(items, "Juno")).toEqual([
      MEDIBLASTER_OUTPUT_ATTR,
      TORPEDO_DAMAGE_ATTR,
      "WP",
      "Health",
      "Weapon Multiplier",
    ]);
    expect(collectAttributeTypesForHero(items, NO_HERO)).toEqual(["Health"]);
    expect(collectAttributeTypesForHero(items, ALL_HEROES)).toEqual(["WP", "Health", "Blink Power", "Weapon Multiplier"]);
    expect(collectAttributeCountsForHero(items, "Juno")).toEqual({
      [MEDIBLASTER_OUTPUT_ATTR]: 0,
      [TORPEDO_DAMAGE_ATTR]: 0,
      WP: 1,
      Health: 1,
      "Weapon Multiplier": 1,
    });
  });
});
