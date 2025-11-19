import { describe, expect, it } from "vitest";
import { buildHeroMetadata } from "../scripts/lib/heroMetadataBuilder";
import type { HeroSnapshot } from "../scripts/lib/itemBuilder";
import { imageKey } from "../scripts/lib/imageUtils";

const hero: HeroSnapshot = {
  name: "Juno",
  slug: "juno",
  raw: `[[File: Juno Stadium.png|thumb|310x310px]]
== Powers ==
{{Ability details
| ability_name = Blink Boosts
| ability_image = Blink Boosts.png
| ability_type = Stadium Power
}}
`,
};

describe("buildHeroMetadata", () => {
  it("extracts the hero portrait url", () => {
    const lookup = new Map([[imageKey("Juno Stadium.png")!, "https://static.wikia.nocookie.net/juno.png"]]);
    const metadata = buildHeroMetadata(hero, lookup);
    expect(metadata.name).toBe("Juno");
    expect(metadata.slug).toBe("juno");
    expect(metadata.iconUrl).toBe("https://static.wikia.nocookie.net/juno.png");
  });

  it("returns metadata even when no image exists", () => {
    const metadata = buildHeroMetadata({ ...hero, raw: "No file reference" });
    expect(metadata.iconUrl).toBeUndefined();
    expect(metadata.name).toBe("Juno");
  });
});
