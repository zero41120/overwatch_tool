import { describe, expect, it } from "vitest";
import { computeMediblasterOutputFromMap } from "../../metrics/JunoMediblasterMetric";

describe("computeMediblasterOutputFromMap", () => {
  it("reduces output when armor is present and codebreaker offsets the reduction", () => {
    const map = new Map<string, number>([
      ["WP", 0],
      ["AS", 0],
      ["Weapon Multiplier", 0],
      ["MA", 0],
    ]);

    const base = computeMediblasterOutputFromMap({ map });
    const armored = computeMediblasterOutputFromMap({ map, enemyHasArmor: true });
    const codebreaker = computeMediblasterOutputFromMap({
      map,
      enemyHasArmor: true,
      items: [{ name: "CODEBREAKER" }],
    });

    expect(armored).toBeLessThan(base);
    expect(codebreaker).toBeGreaterThan(armored);
    expect(codebreaker).toBeLessThan(base);
  });

  it("scales max ammo bonuses with the ammo scaling multiplier", () => {
    const map = new Map<string, number>([
      ["WP", 0],
      ["AS", 0],
      ["Weapon Multiplier", 0],
      ["MA", 50],
    ]);

    const base = computeMediblasterOutputFromMap({ map });
    const halfScaling = computeMediblasterOutputFromMap({ map, ammoScalingMultiplier: 0.5 });
    const noScaling = computeMediblasterOutputFromMap({ map, ammoScalingMultiplier: 0 });

    expect(halfScaling).toBeLessThan(base);
    expect(noScaling).toBeLessThan(halfScaling);
  });
});
