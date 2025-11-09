import { describe, expect, it } from "vitest";
import { formatDescription, normalizeBuffName, normalizeItemName } from "../lib/textUtils";

describe("text utils", () => {
  it("formats descriptions with bullet lists", () => {
    const input = "Gain bonuses:\n:{{Life}} 50 Health\n:{{Weapon_Power|10%}} Weapon Power";
    const result = formatDescription(input);
    expect(result).toContain("<ul>");
    expect(result).toContain("<li>");
    expect(result).toContain("50 Health");
    expect(result).toContain("Weapon Power");
  });

  it("normalizes buff names by removing wiki markup", () => {
    expect(normalizeBuffName("[Biotic Grenade] Duration")).toBe("Biotic Grenade Duration");
    expect(normalizeBuffName("Weapon Power")).toBe("WP");
  });

  it("normalizes item names to uppercase", () => {
    expect(normalizeItemName("Mark of the Kitsune")).toBe("MARK OF THE KITSUNE");
  });
});
