import { describe, expect, it } from "vitest";
import { buildHeroPowers } from "../scripts/lib/heroPowerBuilder";
import type { HeroSnapshot } from "../scripts/lib/itemBuilder";

const hero: HeroSnapshot = {
  name: "Juno",
  slug: "juno",
  raw: `== Powers ==
{{Ability details
| ability_name = Blink Boosts
| ability_image = Blink Boosts.png
| ability_type = Stadium Power
| affected_ability = Glide Boost
| official_description = [Glide Boost] gains 2 additional charges and has a 40% reduced cooldown.
| ability_details = * Has a shorter duration.
}}
{{Ability details
| removed = 1
| ability_name = Old Power
| ability_type = Stadium Power
| official_description = Removed
}}
{{Ability details
| ability_name = Not a Stadium Item
| ability_type = Hero Item (Weapon)
| official_description = Should be ignored
}}
`,
};

describe("buildHeroPowers", () => {
  it("parses stadium power entries and formats description", () => {
    const powers = buildHeroPowers(hero);
    expect(powers).toHaveLength(1);
    const [power] = powers;
    expect(power.hero).toBe("Juno");
    expect(power.name).toBe("Blink Boosts");
    expect(power.affectedAbility).toBe("Glide Boost");
    expect(power.description).toContain("[Glide Boost]");
    expect(power.description).toContain("Has a shorter duration.");
  });
});
