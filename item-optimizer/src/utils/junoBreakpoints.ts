export type TorpedoItem = {
  id: string;
  name: string;
  cost: number;
  ap: number;
  baseAdd: number;
  hp: number;
  wp: number;
  lifesteal: number;
  dr: number;
  hps: number;
  situational: boolean;
};

export type TorpedoOptions = {
  baseDamage?: number;
  minCash?: number;
  maxCash?: number;
  maxItems?: number;
};

export type TorpedoCandidate = {
  cost: number;
  damage: number;
  ap: number;
  baseAdd: number;
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

  function better(existing: TorpedoCandidate | undefined, candidate: TorpedoCandidate) {
    if (!existing) return true;
    if (candidate.damage > existing.damage + eps) return true;
    if (Math.abs(candidate.damage - existing.damage) <= eps && candidate.survival > existing.survival + eps) {
      return true;
    }
    return false;
  }

  const n = enabledItems.length;
  const chosen: number[] = [];

  function evaluateSelection() {
    let cost = 0;
    let ap = 0;
    let hp = 0;
    let wp = 0;
    let lifesteal = 0;
    let dr = 0;
    let hps = 0;
    let baseAdd = 0;
    let hasSkyline = false;

    for (const idx of chosen) {
      const item = enabledItems[idx];
      cost += item.cost;
      if (cost > maxCash) return;
      ap += item.ap;
      hp += item.hp;
      wp += item.wp;
      lifesteal += item.lifesteal;
      dr += item.dr;
      hps += item.hps;
      baseAdd += item.baseAdd;
      if (/^skyline\s+nanites$/i.test(item.name.toLocaleLowerCase())) hasSkyline = true;
    }

    // Torpedo damage scales from baseDamage plus any flat baseAdd, then AP multiplier.
    const base = baseDamage + baseAdd;
    const raw = base * (1 + ap / 100);
    const damage = hasSkyline ? raw * 1.2 : raw;
    const survival = survivalScore({ hp, wp, lifesteal, dr, hps });
    const names = chosen.map((index) => enabledItems[index].name);
    const candidate: TorpedoCandidate = { cost, damage, ap, baseAdd, names, survival };

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

  let startBest: TorpedoCandidate | undefined;
  for (const cost of costs) {
    if (cost > minCash) break;
    const candidate = bestAtCost.get(cost)!;
    if (better(startBest, candidate)) startBest = candidate;
  }

  const rows: TorpedoBreakpoint[] = [];
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
    Math.abs(rows[0].damage - rows[1].damage) < eps
  ) {
    rows.splice(1, 1);
  }

  return rows;
}
