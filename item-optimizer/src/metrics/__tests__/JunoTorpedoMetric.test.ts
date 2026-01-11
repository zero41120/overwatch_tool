import { describe, expect, it } from "vitest";
import { buildDerivedStatMap } from "../../utils/derivedStatMap";
import type { Item } from "../../types";
import { JunoTorpedoMetric } from "../JunoTorpedoMetric";
import type { MetricContext } from "../metricContext";

describe("JunoTorpedoMetric", () => {
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

  function buildContext(): MetricContext {
    return {
      items,
      map: buildDerivedStatMap(items),
      hero: "Juno",
    };
  }

  it("returns burst damage for a single torpedo hit", () => {
    const metric = new JunoTorpedoMetric(buildContext());
    const values = metric.evaluateWithDefaults({ baseDamage: 85 });
    const baseDamage = 85 + 20;
    const raw = baseDamage * (1 + 10 / 100);
    const expected = Math.round(raw * 1.2);
    expect(values.burst).toBe(expected);
  });

  it("scales sustain output by cooldown", () => {
    const metric = new JunoTorpedoMetric(buildContext());
    const values = metric.evaluateWithDefaults({ baseDamage: 85, cooldownSeconds: 5 });
    expect(values.sustain).toBeCloseTo(values.burst / 5, 5);
  });
});
