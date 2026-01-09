import type { MediblasterItem } from "./junoMediblasterItems";

export type StatProfile = {
  cost: number;
  wp: number;
  as: number;
  weaponMultiplier: number;
  ma: number;
  hp: number;
  lifesteal: number;
  dr: number;
  hps: number;
  indices: number[];
};

export type ParetoOptions = {
  maxItems: number;
  maxCash: number;
  costStep: number;
  maxFrontier: number;
};

const EPSILON = 1e-9;

function dominates(a: StatProfile, b: StatProfile) {
  const wpOk = a.wp + EPSILON >= b.wp;
  const asOk = a.as + EPSILON >= b.as;
  const wmOk = a.weaponMultiplier + EPSILON >= b.weaponMultiplier;
  const maOk = a.ma + EPSILON >= b.ma;
  if (!(wpOk && asOk && wmOk && maOk)) return false;
  const strictlyBetter =
    a.wp > b.wp + EPSILON ||
    a.as > b.as + EPSILON ||
    a.weaponMultiplier > b.weaponMultiplier + EPSILON ||
    a.ma > b.ma + EPSILON;
  const equalStats =
    Math.abs(a.wp - b.wp) <= EPSILON &&
    Math.abs(a.as - b.as) <= EPSILON &&
    Math.abs(a.weaponMultiplier - b.weaponMultiplier) <= EPSILON &&
    Math.abs(a.ma - b.ma) <= EPSILON;
  if (equalStats && a.cost <= b.cost + EPSILON) return true;
  return strictlyBetter;
}

function heuristicScore(profile: StatProfile) {
  return profile.wp + profile.as + profile.weaponMultiplier + profile.ma;
}

function insertProfile(list: StatProfile[], candidate: StatProfile, maxFrontier: number) {
  for (const existing of list) {
    if (dominates(existing, candidate)) return;
  }

  for (let i = list.length - 1; i >= 0; i -= 1) {
    if (dominates(candidate, list[i])) list.splice(i, 1);
  }

  list.push(candidate);

  if (list.length > maxFrontier) {
    list.sort((a, b) => heuristicScore(b) - heuristicScore(a));
    list.length = maxFrontier;
  }
}

export function buildParetoProfiles(items: MediblasterItem[], opts: ParetoOptions): StatProfile[] {
  const scaledBudget = Math.floor(opts.maxCash / opts.costStep);
  if (scaledBudget <= 0 || items.length === 0) return [];

  const dp: StatProfile[][][] = Array.from({ length: opts.maxItems + 1 }, () =>
    Array.from({ length: scaledBudget + 1 }, () => []),
  );
  dp[0][0] = [
    {
      cost: 0,
      wp: 0,
      as: 0,
      weaponMultiplier: 0,
      ma: 0,
      hp: 0,
      lifesteal: 0,
      dr: 0,
      hps: 0,
      indices: [],
    },
  ];

  items.forEach((item, index) => {
    const scaledCost = Math.ceil(item.cost / opts.costStep);
    if (scaledCost > scaledBudget) return;

    for (let k = opts.maxItems; k >= 1; k -= 1) {
      for (let w = scaledBudget; w >= scaledCost; w -= 1) {
        const sourceProfiles = dp[k - 1][w - scaledCost];
        if (sourceProfiles.length === 0) continue;

        const target = dp[k][w];
        for (const prof of sourceProfiles) {
          const next: StatProfile = {
            cost: prof.cost + item.cost,
            wp: prof.wp + item.wp,
            as: prof.as + item.as,
            weaponMultiplier: prof.weaponMultiplier + item.weaponMultiplier,
            ma: prof.ma + item.ma,
            hp: prof.hp + item.hp,
            lifesteal: prof.lifesteal + item.lifesteal,
            dr: prof.dr + item.dr,
            hps: prof.hps + item.hps,
            indices: [...prof.indices, index],
          };
          insertProfile(target, next, opts.maxFrontier);
        }
      }
    }
  });

  const profiles: StatProfile[] = [];
  for (let k = 1; k <= opts.maxItems; k += 1) {
    for (let w = 0; w <= scaledBudget; w += 1) {
      profiles.push(...dp[k][w]);
    }
  }

  return profiles;
}
