import { describe, expect, it } from "vitest";
import { buildDerivedStatMap } from "../../utils/derivedStatMap";
import type { Item } from "../../types";
import type { MetricContext } from "../core/metricContext";
import { computeMediblasterOutputFromMap, JunoMediblasterMetric } from "../JunoMediblasterMetric";

describe("JunoMediblasterMetric", () => {
  const items: Item[] = [
    {
      name: "AP Booster",
      attributes: [{ type: "AP", value: "20%" }],
      cost: 0,
      tab: "ability",
      rarity: "rare",
    },
  ];

  function buildContext(heroPowers?: string[]): MetricContext {
    return {
      items,
      map: buildDerivedStatMap(items),
      hero: "Juno",
      heroPowers,
    };
  }

  it("adds Stinger DPS scaled by ability power", () => {
    const metric = new JunoMediblasterMetric(buildContext(["Stinger"]));
    const baseBurst = computeMediblasterOutputFromMap({
      map: buildDerivedStatMap(items),
      items: items.map((item) => ({ name: item.name })),
      withReload: false,
    });
    const baseSustain = computeMediblasterOutputFromMap({
      map: buildDerivedStatMap(items),
      items: items.map((item) => ({ name: item.name })),
      withReload: true,
    });
    const accuracyMultiplier = 0.35;
    const stingerBonus = 10 * (1 + 20 / 100);
    const values = metric.evaluateWithDefaults({});
    expect(values.burst).toBe(Math.round(baseBurst * accuracyMultiplier + stingerBonus));
    expect(values.sustain).toBe(Math.round(baseSustain * accuracyMultiplier + stingerBonus));
  });

  it("scales weapon DPS by accuracy without affecting Stinger", () => {
    const metric = new JunoMediblasterMetric(buildContext(["Stinger"]));
    const baseBurst = computeMediblasterOutputFromMap({
      map: buildDerivedStatMap(items),
      items: items.map((item) => ({ name: item.name })),
      withReload: false,
    });
    const stingerBonus = 10 * (1 + 20 / 100);
    const values = metric.evaluateWithDefaults({ weaponAccuracy: 50 });
    expect(values.burst).toBe(Math.round(baseBurst * 0.5 + stingerBonus));
  });

  it("does not add Stinger DPS when the power is not selected", () => {
    const metric = new JunoMediblasterMetric(buildContext());
    const baseBurst = computeMediblasterOutputFromMap({
      map: buildDerivedStatMap(items),
      items: items.map((item) => ({ name: item.name })),
      withReload: false,
    });
    const baseSustain = computeMediblasterOutputFromMap({
      map: buildDerivedStatMap(items),
      items: items.map((item) => ({ name: item.name })),
      withReload: true,
    });
    const accuracyMultiplier = 0.35;
    const values = metric.evaluateWithDefaults({});
    expect(values.burst).toBe(Math.round(baseBurst * accuracyMultiplier));
    expect(values.sustain).toBe(Math.round(baseSustain * accuracyMultiplier));
  });
});
