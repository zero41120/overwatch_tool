import { describe, expect, it } from "vitest";
import type { Item, ItemRecord } from "../../../types";

type ParserModule = {
  parseWikiItems: (source: string) => Item[];
  sanitizeDescription: (value: string) => string;
  mergeWithExisting: (item: Item, existing: ItemRecord | null) => ItemRecord;
  deriveSlug: (item: Item) => string;
  readExistingRecord: (text: string) => ItemRecord | null;
};

const parserModulePromise = import("../../../../scripts/wikiParser.mjs") as Promise<ParserModule>;

describe("wikiParser", () => {
  it("parses basic items with multiple buffs", async () => {
    const { parseWikiItems } = await parserModulePromise;
    const raw = `
== Weapon ==
===Common===
{{Ability details
| ability_name = Compensator
| hero_name = All heroes
| stadium_buffs = Weapon Power;;5%::Attack Speed;;10%
| official_description = Gain '''bonus''' damage.
| stadium_cost = 1000
}}
`;
    const items = parseWikiItems(raw);
    expect(items).toHaveLength(1);
    expect(items[0]).toMatchObject({
      name: "COMPENSATOR",
      tab: "weapon",
      rarity: "common",
      cost: 1000,
      attributes: [
        { type: "WP", value: "5%" },
        { type: "AS", value: "10%" },
        { type: "description", value: "Gain <b>bonus</b> damage." },
      ],
    });
  });

  it("splits comma-delimited stats into multiple attributes", async () => {
    const { parseWikiItems } = await parserModulePromise;
    const raw = `
== Survival ==
=== Rare ===
{{Ability details
| ability_name = Rüstung von Wilhelm
| hero_name = All heroes
| stadium_buffs = Health, Armor, Shields;;15%
| official_description = 
| stadium_cost = 9000
}}
`;
    const [item] = parseWikiItems(raw);
    expect(item.attributes.slice(0, 3)).toEqual([
      { type: "Health", value: "15%" },
      { type: "Armor", value: "15%" },
      { type: "Shields", value: "15%" },
    ]);
  });

  it("converts multiline descriptions with bullets", async () => {
    const { parseWikiItems } = await parserModulePromise;
    const raw = `
== Ability ==
=== Epic ===
{{Ability details
| ability_name = Vanadium Injection
| hero_name = All heroes
| stadium_buffs = Shields;;50
| official_description = While at 100% Ultimate Charge, gain:
:{{Life}} 50 Health
:{{Weapon_Power}} 10% Weapon Power
:{{Ability_Power}} 10% Ability Power
| stadium_cost = 10000
}}
`;
    const [item] = parseWikiItems(raw);
    expect(item.attributes.at(-1)).toEqual({
      type: "description",
      value: "While at 100% Ultimate Charge, gain: <ul><li>50 Health</li><li>10% Weapon Power</li><li>10% Ability Power</li></ul>",
    });
  });

  it("preserves ids and overrides when merging", async () => {
    const { mergeWithExisting } = await parserModulePromise;
    const item: Item = {
      name: "TEST ITEM",
      attributes: [{ type: "WP", value: "5%" }],
      cost: 1200,
      tab: "weapon",
      rarity: "common",
    };
    const existing: ItemRecord = {
      item: { ...item, id: "i_999", character: "Example Hero" },
      override: { name: "TEST ITEM", disabled: true },
    };
    const merged = mergeWithExisting(item, existing);
    expect(merged.item.id).toBe("i_999");
    expect(merged.item.character).toBe("Example Hero");
    expect(merged.override).toEqual(existing.override);
  });

  it("parses existing module strings through readExistingRecord", async () => {
    const { readExistingRecord, deriveSlug } = await parserModulePromise;
    const stub = `
import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "STUB",
    attributes: [{ type: "WP", value: "5%" }],
    cost: 500,
    tab: "weapon",
    rarity: "common",
    id: "i_stub"
  },
  override: { name: "STUB" }
};

export default record;
`;
    const parsed = readExistingRecord(stub);
    expect(parsed?.item.name).toBe("STUB");
    expect(parsed?.override?.name).toBe("STUB");
    expect(deriveSlug(parsed!.item)).toBe("stub");
  });
});
