import type { Item } from "../../types";
import { buildDerivedStatMap } from "../derivedStatMap";
import { MEDIBLASTER_OUTPUT_ATTR } from "../junoMediblaster";

test("buildDerivedStatMap sums raw stats only", () => {
  const items: Item[] = [
    {
      name: "Alpha",
      attributes: [
        { type: "WP", value: "20%" },
        { type: "AP", value: "5" },
        { type: "description", value: "Adds 10 base damage" },
      ],
      cost: 0,
      tab: "weapon",
      rarity: "common",
    },
    {
      name: "Beta",
      attributes: [
        { type: "WP", value: "10%" },
        { type: "AS", value: "3" },
      ],
      cost: 0,
      tab: "weapon",
      rarity: "common",
    },
  ];

  const map = buildDerivedStatMap(items);

  expect(map.get("WP")).toBe(30);
  expect(map.get("AP")).toBe(5);
  expect(map.get("AS")).toBe(3);
  expect(map.has("description")).toBe(false);
  expect(map.has(MEDIBLASTER_OUTPUT_ATTR)).toBe(false);
});
