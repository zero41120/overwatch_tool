import type { TorpedoItem, TorpedoOptions } from "./junoTypes";

export type TorpedoCandidate = {
  cost: number;
  damage: number;
  ap: number;
  baseAdd: number;
  burn: boolean;
  names: string[];
  survival: number;
};

export type TorpedoBreakpoint = TorpedoCandidate & { budget: number };

export function computeJunoTorpedoBreakpoints(
  enabledItems: TorpedoItem[],
  opts: TorpedoOptions = {},
): TorpedoBreakpoint[] {
  const baseDamage = opts.baseDamage ?? 85;
  const minCash = opts.minCash ?? 10000;
  const maxCash = opts.maxCash ?? 70000;
  const maxItems = opts.maxItems ?? 6;
  const allowBurn = opts.allowBurn ?? true;
  const eps = 1e-9;

  const bestAtCost = new Map<number, TorpedoCandidate>();

  function survivalScore(s: {
    hp: number;
    wp: number;
    lifesteal: number;
    dr: number;
    hps: number;
  }) {
    return s.hp + 1.5 * s.wp + 2 * s.lifesteal + 3 * s.dr + 4 * s.hps;
  }

  function better(a: TorpedoCandidate | undefined, b: TorpedoCandidate) {
    if (!a) return true;
    if (b.damage > a.damage + eps) return true;
    if (Math.abs(b.damage - a.damage) <= eps && b.survival > a.survival + eps) return true;
    return false;
  }

  const n = enabledItems.length;
  const chosen: number[] = [];

  function evalChosen() {
    let cost = 0;
    let ap = 0;
    let hp = 0;
    let wp = 0;
    let lifesteal = 0;
    let dr = 0;
    let hps = 0;
    let baseAdd = 0;
    let hasBurn = false;

    for (const idx of chosen) {
      const it = enabledItems[idx];
      cost += it.cost;
      if (cost > maxCash) return;
      ap += it.ap;
      hp += it.hp;
      wp += it.wp;
      lifesteal += it.lifesteal;
      dr += it.dr;
      hps += it.hps;
      baseAdd += it.baseAdd;
      if (allowBurn && it.burn) hasBurn = true;
    }

    const base = baseDamage + baseAdd;
    const raw = base * (1 + ap / 100);
    const damage = hasBurn ? raw * 1.2 : raw;
    const survival = survivalScore({ hp, wp, lifesteal, dr, hps });
    const names = chosen.map((i) => enabledItems[i].name);
    const cand: TorpedoCandidate = { cost, damage, ap, baseAdd, burn: hasBurn, names, survival };

    const cur = bestAtCost.get(cost);
    if (better(cur, cand)) bestAtCost.set(cost, cand);
  }

  function dfs(start: number) {
    if (chosen.length > 0) evalChosen();
    if (chosen.length === maxItems) return;
    for (let i = start; i < n; i++) {
      chosen.push(i);
      dfs(i + 1);
      chosen.pop();
    }
  }

  dfs(0);

  const costs = Array.from(bestAtCost.keys()).sort((a, b) => a - b);
  if (costs.length === 0) return [];

  let startBest: TorpedoCandidate | undefined;
  for (const c of costs) {
    if (c > minCash) break;
    const cand = bestAtCost.get(c)!;
    if (better(startBest, cand)) startBest = cand;
  }

  const rows: TorpedoBreakpoint[] = [];
  if (startBest) rows.push({ budget: minCash, ...startBest });

  let current = startBest;
  for (const c of costs) {
    if (c < minCash || c > maxCash) continue;
    const cand = bestAtCost.get(c)!;
    if (better(current, cand)) {
      current = cand;
      rows.push({ budget: c, ...cand });
    }
  }

  if (
    rows.length >= 2 &&
    rows[0].budget === rows[1].budget &&
    Math.abs(rows[0].damage - rows[1].damage) < eps
  ) {
    rows.splice(1, 1);
  }

  return rows;
}
