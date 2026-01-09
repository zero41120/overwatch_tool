import { computeMediblasterOutputFromMap } from "./junoMediblaster";
import type { MediblasterItem } from "./junoMediblasterItems";
import { buildParetoProfiles } from "./junoMediblasterPareto";

type MediblasterOutputEvaluator = (args: {
  map: Map<string, number>;
  items: { name: string }[];
}) => number;

export type MediblasterOptions = {
  minCash?: number;
  maxCash?: number;
  maxItems?: number;
  costStep?: number;
  maxFrontier?: number;
  computeOutput?: MediblasterOutputEvaluator;
};

export type MediblasterCandidate = {
  cost: number;
  output: number;
  wp: number;
  as: number;
  weaponMultiplier: number;
  ma: number;
  names: string[];
  survival: number;
};

export type MediblasterBreakpoint = MediblasterCandidate & { budget: number };

export function computeJunoMediblasterBreakpoints(
  enabledItems: MediblasterItem[],
  opts: MediblasterOptions = {},
): MediblasterBreakpoint[] {
  const minCash = opts.minCash ?? 10000;
  const maxCash = opts.maxCash ?? 70000;
  const maxItems = opts.maxItems ?? 6;
  const costStep = opts.costStep ?? 250;
  const maxFrontier = opts.maxFrontier ?? 20;
  const eps = 1e-9;
  const computeOutput: MediblasterOutputEvaluator =
    opts.computeOutput ??
    (({ map, items }) =>
      computeMediblasterOutputFromMap({
        map,
        items,
      }));

  const bestAtCost = new Map<number, MediblasterCandidate>();

  function survivalScore(s: { hp: number; lifesteal: number; dr: number; hps: number }) {
    return s.hp + 2 * s.lifesteal + 3 * s.dr + 4 * s.hps;
  }

  function better(existing: MediblasterCandidate | undefined, candidate: MediblasterCandidate) {
    if (!existing) return true;
    if (candidate.output > existing.output + eps) return true;
    if (Math.abs(candidate.output - existing.output) <= eps && candidate.survival > existing.survival + eps) {
      return true;
    }
    return false;
  }

  const profiles = buildParetoProfiles(enabledItems, {
    maxItems,
    maxCash,
    costStep,
    maxFrontier,
  });

  for (const prof of profiles) {
    const names = prof.indices.map((index) => enabledItems[index].name);
    const output = computeOutput({
      map: new Map([
        ["WP", prof.wp],
        ["AS", prof.as],
        ["Weapon Multiplier", prof.weaponMultiplier],
        ["MA", prof.ma],
      ]),
      items: names.map((name) => ({ name })),
    });
    const survival = survivalScore({
      hp: prof.hp,
      lifesteal: prof.lifesteal,
      dr: prof.dr,
      hps: prof.hps,
    });
    const candidate: MediblasterCandidate = {
      cost: prof.cost,
      output,
      wp: prof.wp,
      as: prof.as,
      weaponMultiplier: prof.weaponMultiplier,
      ma: prof.ma,
      names,
      survival,
    };
    const current = bestAtCost.get(candidate.cost);
    if (better(current, candidate)) bestAtCost.set(candidate.cost, candidate);
  }

  const costs = Array.from(bestAtCost.keys()).sort((a, b) => a - b);
  if (costs.length === 0) return [];

  let startBest: MediblasterCandidate | undefined;
  for (const cost of costs) {
    if (cost > minCash) break;
    const candidate = bestAtCost.get(cost)!;
    if (better(startBest, candidate)) startBest = candidate;
  }

  const rows: MediblasterBreakpoint[] = [];
  if (startBest) rows.push({ budget: minCash, ...startBest });

  let current = startBest;
  for (const cost of costs) {
    if (cost < minCash || cost > maxCash) continue;
    const candidate = bestAtCost.get(cost)!;
    if (better(current, candidate)) {
      current = candidate;
      rows.push({ budget: cost, ...candidate });
    }
  }

  if (
    rows.length >= 2 &&
    rows[0].budget === rows[1].budget &&
    Math.abs(rows[0].output - rows[1].output) < eps
  ) {
    rows.splice(1, 1);
  }

  return rows;
}
