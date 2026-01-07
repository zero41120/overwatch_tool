import type { Item, MinAttrGroup, WeightRow } from "../../types";
import { attributeValueToLabel, sortAttributes } from "../attributeUtils";
import { MEDIBLASTER_OUTPUT_ATTR } from "../junoMediblaster";
import { TORPEDO_DAMAGE_ATTR } from "../junoTorpedoDamage";
import { aggregate, collectRelevantAttributes, meetsMinGroups, rarityColor, scoreFromMap, uniqueByItems } from "../utils";

describe("optimizer utils", () => {
  test("aggregate sums attributes correctly", () => {
    const items: Item[] = [
      {
        name: "A",
        attributes: [{ type: "AP", value: "5" }],
        cost: 0,
        tab: "weapon",
        rarity: "common",
      },
      {
        name: "B",
        attributes: [
          { type: "AP", value: "3" },
          { type: "WP", value: "2" },
        ],
        cost: 0,
        tab: "weapon",
        rarity: "common",
      },
    ];
    const map = aggregate(items);
    expect(map.get("AP")).toBe(8);
    expect(map.get("WP")).toBe(2);
  });

  test("aggregate includes Juno mediblaster output from WP/AS/Weapon Multiplier/MA", () => {
    const items: Item[] = [
      {
        name: "A",
        attributes: [
          { type: "WP", value: "20%" },
          { type: "AS", value: "10%" },
        ],
        cost: 0,
        tab: "weapon",
        rarity: "common",
      },
      {
        name: "B",
        attributes: [
          { type: "Weapon Multiplier", value: "15%" },
          { type: "MA", value: "25%" },
        ],
        cost: 0,
        tab: "weapon",
        rarity: "common",
      },
    ];
    const map = aggregate(items, "Juno");
    const TPS = 60;
    const RELOAD_FRAMES = 1.5 * TPS;
    const COCKING_FRAMES = 0.3 * TPS;
    const RECOVERY_FRAMES = 0.45 * TPS;
    const INTRA_BURST_INTERVAL_FRAMES = 0.03 * TPS;
    const VOLLEY_SIZE = 12;
    const wp = 100 + 20;
    const wm = 1 + 15 / 100;
    const as = 100 + 10;
    const clipSize = Math.max(1, Math.round(180 * (1 + 25 / 100)));
    const attackSpeedPercent = as / 100;
    const weaponPowerPercent = wp / 100;
    const cockingFrames = Math.ceil(COCKING_FRAMES / attackSpeedPercent);
    let cycleFrames = RELOAD_FRAMES + cockingFrames;
    const singleRecoveryFrame = Math.ceil(RECOVERY_FRAMES / attackSpeedPercent);
    for (let i = 1; i <= clipSize; i++) {
      const isFirstBulletOfVolley = (i - 1) % VOLLEY_SIZE === 0;
      if (!isFirstBulletOfVolley) cycleFrames += INTRA_BURST_INTERVAL_FRAMES;
      const isEndOfVolley = i % VOLLEY_SIZE === 0;
      const hasAmmoLeft = i < clipSize;
      if (isEndOfVolley && hasAmmoLeft) cycleFrames += singleRecoveryFrame;
    }
    const totalDamage = clipSize * 7.5 * wm * weaponPowerPercent;
    const expected = Math.round(totalDamage * (TPS / cycleFrames));
    expect(map.get(MEDIBLASTER_OUTPUT_ATTR)).toBe(expected);
  });

  test("aggregate includes Juno torpedo damage from AP and torpedo base add", () => {
    const items: Item[] = [
      {
        name: "SKYLINE NANITES",
        attributes: [{ type: "AP", value: "10%" }],
        cost: 0,
        tab: "ability",
        rarity: "epic",
      },
      {
        name: "Pulsar Torpedoes",
        attributes: [{ type: "description", value: '<b class="stat-ap">20</b> damage' }],
        cost: 0,
        tab: "ability",
        rarity: "rare",
      },
    ];
    const map = aggregate(items, "Juno");
    const baseDamage = 85 + 20;
    const raw = baseDamage * (1 + 10 / 100);
    const expected = Math.round(raw * 1.2);
    expect(map.get(TORPEDO_DAMAGE_ATTR)).toBe(expected);
  });

  test("collectRelevantAttributes expands mediblaster output to WP/AS/Weapon Multiplier", () => {
    const attrs = collectRelevantAttributes([{ type: MEDIBLASTER_OUTPUT_ATTR, weight: 1 }], false, []);
    expect(attrs.has(MEDIBLASTER_OUTPUT_ATTR)).toBe(true);
    expect(attrs.has("WP")).toBe(true);
    expect(attrs.has("AS")).toBe(true);
    expect(attrs.has("Weapon Multiplier")).toBe(true);
    expect(attrs.has("MA")).toBe(true);
  });

  test("collectRelevantAttributes expands torpedo damage to AP", () => {
    const attrs = collectRelevantAttributes([{ type: TORPEDO_DAMAGE_ATTR, weight: 1 }], false, []);
    expect(attrs.has(TORPEDO_DAMAGE_ATTR)).toBe(true);
    expect(attrs.has("AP")).toBe(true);
  });

  test("scoreFromMap multiplies weights", () => {
    const map = new Map<string, number>([
      ["AP", 5],
      ["WP", 10],
    ]);
    const weights: WeightRow[] = [
      { type: "AP", weight: 1.5 },
      { type: "WP", weight: 2 },
    ];
    expect(scoreFromMap(map, weights)).toBeCloseTo(27.5);
  });

  test("rarityColor returns expected color", () => {
    expect(rarityColor("common")).toBe("#17a631");
    expect(rarityColor("rare")).toBe("#217dbe");
    expect(rarityColor("epic")).toBe("#8727d6");
    // @ts-expect-error testing default case
    expect(rarityColor("legendary")).toBe("black");
  });

  test("meetsMinGroups validates totals", () => {
    const items: Item[] = [
      {
        name: "A",
        attributes: [{ type: "AP", value: "5" }],
        cost: 0,
        tab: "w",
        rarity: "common",
      },
      {
        name: "B",
        attributes: [{ type: "WP", value: "3" }],
        cost: 0,
        tab: "w",
        rarity: "common",
      },
    ];
    const groups: MinAttrGroup[] = [{ attrs: ["AP", "WP"], value: 8 }];
    expect(meetsMinGroups(items, groups)).toBe(true);
    groups[0].value = 9;
    expect(meetsMinGroups(items, groups)).toBe(false);
  });

  test("uniqueByItems removes duplicate item sets", () => {
    const a: Item = { name: "A", attributes: [], cost: 1, tab: "w", rarity: "common", id: "1" };
    const b: Item = { name: "B", attributes: [], cost: 1, tab: "w", rarity: "common", id: "2" };
    const combos = [
      { items: [a], cost: 1, score: 5 },
      { items: [a], cost: 1, score: 5 },
      { items: [b], cost: 1, score: 5 },
    ];
    const unique = uniqueByItems(combos);
    expect(unique).toHaveLength(2);
    expect(unique[0].items[0].id).toBe("1");
    expect(unique[1].items[0].id).toBe("2");
  });
});

describe("attribute utils", () => {
  test("attributeValueToLabel maps codes", () => {
    expect(attributeValueToLabel("ALS")).toBe("Ability Life Steal");
    expect(attributeValueToLabel("Unknown")).toBe("Unknown");
  });

  test("sortAttributes prioritizes WP/AP/AS", () => {
    const arr = ["Health", "AP", "WP"];
    const sorted = [...arr].sort(sortAttributes);
    expect(sorted).toEqual(["WP", "AP", "Health"]);
  });
});
