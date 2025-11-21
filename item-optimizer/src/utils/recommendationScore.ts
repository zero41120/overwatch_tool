export type RecommendationMatches = {
  synergyMatches: string[];
  counterMatches: string[];
  antiMatches: string[];
  beingCounteredMatches: string[];
};

export interface RecommendationScore {
  total: number;
  positive: number;
  negative: number;
}

export function calculateRecommendationScore(matches: RecommendationMatches): RecommendationScore {
  const positive = matches.synergyMatches.length + matches.counterMatches.length;
  const negative = matches.antiMatches.length + matches.beingCounteredMatches.length;
  return { total: positive - negative, positive, negative };
}
