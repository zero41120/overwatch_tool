import { describe, expect, it } from "vitest";
import { calculateRecommendationScore, type RecommendationMatches } from "../recommendationScore";

describe("calculateRecommendationScore", () => {
  it("adds synergy/counter and subtracts anti-synergy/beingCountered", () => {
    const matches: RecommendationMatches = {
      synergyMatches: ["Ashe", "Tracer"],
      counterMatches: ["Reinhardt"],
      antiMatches: ["Mercy"],
      beingCounteredMatches: ["Sombra", "Winston", "Genji"],
    };

    const result = calculateRecommendationScore(matches);

    expect(result).toEqual({
      total: -1,
      positive: 3,
      negative: 4,
    });
  });

  it("returns zero for empty matches", () => {
    const matches: RecommendationMatches = {
      synergyMatches: [],
      counterMatches: [],
      antiMatches: [],
      beingCounteredMatches: [],
    };
    const result = calculateRecommendationScore(matches);
    expect(result).toEqual({
      total: 0,
      positive: 0,
      negative: 0,
    });
  });
});
