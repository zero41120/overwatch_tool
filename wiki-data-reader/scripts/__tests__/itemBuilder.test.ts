import { describe, expect, it } from "vitest";
import { buildGeneralItemRecords, buildHeroItemRecords, type HeroSnapshot } from "../lib/itemBuilder.ts";

const SAMPLE_TEMPLATE = `
{{Ability details
| ability_name = Vantage Shot
| ability_image = Vantage Shot.png
| ability_type = General Item (Weapon)
| stadium_buffs = Weapon Power;;5%
| stadium_rarity = Rare
| stadium_cost = 4000
}}
`;

describe("itemBuilder icon url resolution", () => {
  it("attaches iconUrl when lookup contains the image", () => {
    const lookup = new Map<string, string>([["vantage_shot.png", "https://cdn.test/vantage.png"]]);
    const records = buildGeneralItemRecords(SAMPLE_TEMPLATE, lookup);
    expect(records).toHaveLength(1);
    expect(records[0].item.iconUrl).toBe("https://cdn.test/vantage.png");
  });

  it("leaves iconUrl undefined when image snapshot is missing", () => {
    const records = buildGeneralItemRecords(SAMPLE_TEMPLATE);
    expect(records).toHaveLength(1);
    expect(records[0].item.iconUrl).toBeUndefined();
  });

  it("works for hero-specific records", () => {
    const heroSnapshot: HeroSnapshot = { name: "Juno", slug: "juno", raw: SAMPLE_TEMPLATE };
    const lookup = new Map<string, string>([["vantage_shot.png", "https://cdn.test/vantage.png"]]);
    const records = buildHeroItemRecords(heroSnapshot, lookup);
    expect(records).toHaveLength(1);
    expect(records[0].item.character).toBe("Juno");
    expect(records[0].item.iconUrl).toBe("https://cdn.test/vantage.png");
  });
});
