import { computeMediblasterOutputFromMap } from "./junoMediblaster";
import type { MediblasterItem } from "./junoMediblasterItems";

export type MediblasterOptions = {
  minCash?: number;
  maxCash?: number;
  maxItems?: number;
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
  const eps = 1e-9;

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

  const n = enabledItems.length;
  const chosen: number[] = [];

  function evaluateSelection() {
    let cost = 0;
    let wp = 0;
    let as = 0;
    let weaponMultiplier = 0;
    let ma = 0;
    let hp = 0;
    let lifesteal = 0;
    let dr = 0;
    let hps = 0;

    for (const idx of chosen) {
      const item = enabledItems[idx];
      cost += item.cost;
      if (cost > maxCash) return;
      wp += item.wp;
      as += item.as;
      weaponMultiplier += item.weaponMultiplier;
      ma += item.ma;
      hp += item.hp;
      lifesteal += item.lifesteal;
      dr += item.dr;
      hps += item.hps;
    }

    const output = computeMediblasterOutputFromMap(
      new Map([
        ["WP", wp],
        ["AS", as],
        ["Weapon Multiplier", weaponMultiplier],
        ["MA", ma],
      ]),
    );
    const survival = survivalScore({ hp, lifesteal, dr, hps });
    const names = chosen.map((index) => enabledItems[index].name);
    const candidate: MediblasterCandidate = {
      cost,
      output,
      wp,
      as,
      weaponMultiplier,
      ma,
      names,
      survival,
    };

    const current = bestAtCost.get(cost);
    if (better(current, candidate)) bestAtCost.set(cost, candidate);
  }

  function dfs(start: number) {
    if (chosen.length > 0) evaluateSelection();
    if (chosen.length === maxItems) return;
    for (let i = start; i < n; i += 1) {
      chosen.push(i);
      dfs(i + 1);
      chosen.pop();
    }
  }

  dfs(0);

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
