import { describe, expect, it } from "vitest";
import { sanitizeImageUrl } from "../lib/imageUtils";

describe("sanitizeImageUrl", () => {
  it("removes revision suffix and query params", () => {
    const input =
      "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/70/Frenzy_Amplifier.png/revision/latest?cb=20250921171656";
    expect(sanitizeImageUrl(input)).toBe("https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/70/Frenzy_Amplifier.png");
  });

  it("returns original when already clean", () => {
    const input = "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/70/Frenzy_Amplifier.png";
    expect(sanitizeImageUrl(input)).toBe(input);
  });

  it("handles bad urls gracefully", () => {
    expect(sanitizeImageUrl("not-a-url")).toBe("not-a-url");
  });
});
