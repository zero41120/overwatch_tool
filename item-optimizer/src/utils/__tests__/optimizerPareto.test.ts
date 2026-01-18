import { describe, expect, it, vi } from "vitest";
import type { Item } from "../../types";
import { buildOptimizerProfiles } from "../optimizerPareto";

describe("buildOptimizerProfiles", () => {
  it("reports progress as items are processed", () => {
    const items: Item[] = [
      {
        id: "a",
        name: "Item A",
        cost: 5,
        tab: "weapon",
        rarity: "common",
        attributes: [{ type: "WP", value: "10" }],
      },
      {
        id: "b",
        name: "Item B",
        cost: 4,
        tab: "weapon",
        rarity: "common",
        attributes: [{ type: "WP", value: "5" }],
      },
    ];
    const onProgress = vi.fn();

    const profiles = buildOptimizerProfiles(items, {
      maxItems: 1,
      maxCash: 10,
      costStep: 1,
      maxFrontier: 10,
      attrKeys: ["WP"],
      extraFields: [],
      onProgress,
      progressInterval: 1,
    });

    expect(profiles.length).toBeGreaterThan(0);
    expect(onProgress).toHaveBeenCalled();
    expect(onProgress).toHaveBeenLastCalledWith({ phase: "profiles", completed: 2, total: 2 });
  });
});
