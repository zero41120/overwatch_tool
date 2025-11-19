import { beforeEach, describe, expect, it, vi } from "vitest";
import type { HeroPower, ItemRecord } from "../types";
import readLocalData, { readOverrideData } from "../itemDataProvider";

let mockRecords: ItemRecord[] = [];
let mockPowers: HeroPower[] = [];

vi.mock("wiki-data-reader", () => ({
  getItemRecords: () => mockRecords,
  getHeroPowers: () => mockPowers,
}));

describe("itemDataProvider", () => {
  beforeEach(() => {
    mockRecords = [
      {
        item: {
          name: "Alpha Blade",
          attributes: [],
          cost: 1000,
          tab: "weapon",
          rarity: "common",
        },
      },
      {
        item: {
          name: "Beta Core",
          attributes: [],
          cost: 2000,
          tab: "ability",
          rarity: "epic",
        },
      },
    ];
    mockPowers = [];
  });

  it("groups items by tab and rarity", () => {
    const data = readLocalData();
    expect(data.tabs.weapon.common).toHaveLength(1);
    expect(data.tabs.weapon.common[0].name).toBe("Alpha Blade");
    expect(data.tabs.ability.epic).toHaveLength(1);
    expect(data.tabs.ability.epic[0].name).toBe("Beta Core");
  });

  it("builds overrides keyed by override name, id, or item name", () => {
    mockRecords = [
      {
        item: {
          name: "Gamma Lens",
          attributes: [],
          cost: 100,
          tab: "weapon",
          rarity: "common",
        },
        override: {
          name: "Gamma Override",
          attributes: [],
        },
      },
      {
        item: {
          name: "Delta Coil",
          attributes: [],
          cost: 200,
          tab: "weapon",
          rarity: "common",
        },
        override: {
          id: "delta-id",
          attributes: [],
        },
      },
      {
        item: {
          name: "Epsilon Reactor",
          attributes: [],
          cost: 300,
          tab: "weapon",
          rarity: "common",
        },
      },
    ];

    const overrides = readOverrideData();
    expect(overrides["Gamma Override"]).toBeDefined();
    expect(overrides["delta-id"]).toBeDefined();
    expect(overrides["Epsilon Reactor"]).toBeUndefined();
  });

  it("preserves iconUrl from wiki data", () => {
    mockRecords = [
      {
        item: {
          name: "Icon Blade",
          attributes: [],
          cost: 1000,
          tab: "weapon",
          rarity: "common",
          iconUrl: "https://cdn.test/icon-blade.png",
        },
      },
    ];

    const data = readLocalData();
    expect(data.tabs.weapon.common[0].iconUrl).toBe("https://cdn.test/icon-blade.png");
  });

  it("groups hero powers by owner", () => {
    mockPowers = [
      {
        hero: "Juno",
        name: "Torpedo Glide",
        description: "desc",
        order: 1,
      },
      {
        hero: "Juno",
        name: "Blink Boosts",
        affectedAbility: "Glide Boost",
        description: "desc",
        order: 0,
      },
      {
        hero: "Ashe",
        name: "Deadeye",
        affectedAbility: "Viper",
        description: "boom",
        order: 2,
      },
    ];

    const data = readLocalData();
    expect(data.tabs.powers.Juno).toHaveLength(2);
    expect(data.tabs.powers.Juno[0].name).toBe("Blink Boosts");
    expect(data.tabs.powers.Juno[1].name).toBe("Torpedo Glide");
    expect(data.tabs.powers.Ashe[0].affectedAbility).toBe("Viper");
  });
});
