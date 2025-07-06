import type { MinAttrGroup, WeightRow } from "../../types";
import { collectRelevantAttributes } from "../utils";

test("collectRelevantAttributes merges weights and min groups", () => {
  const weights: WeightRow[] = [{ type: "AP", weight: 1 }];
  const groups: MinAttrGroup[] = [{ attrs: ["WP"], value: 5 }];
  const set = collectRelevantAttributes(weights, true, groups);
  expect(set.has("AP")).toBe(true);
  expect(set.has("WP")).toBe(true);
});

test("collectRelevantAttributes ignores groups when disabled", () => {
  const weights: WeightRow[] = [{ type: "AP", weight: 1 }];
  const groups: MinAttrGroup[] = [{ attrs: ["WP"], value: 5 }];
  const set = collectRelevantAttributes(weights, false, groups);
  expect(set.has("AP")).toBe(true);
  expect(set.has("WP")).toBe(false);
});
