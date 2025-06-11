export interface BreakPointResult {
  percent: number;
  shots: number;
  totalDamage: number;
}

function armorReducedDamage(dmg: number, penetrate: boolean): number {
  const flat = penetrate ? 3.5 : 7;
  const cap = penetrate ? 0.25 : 0.5;
  const reduction = Math.min(flat, dmg * cap);
  return dmg - reduction;
}

export function shotsToKill(
  damage: number,
  bulletsPerShot: number,
  hp: number,
  armor: number,
  penetrate: boolean
): { shots: number; totalDamage: number } {
  if (damage <= 0 || bulletsPerShot <= 0) {
    return { shots: Infinity, totalDamage: 0 };
  }
  let remainingHp = hp;
  let remainingArmor = armor;
  let shots = 0;
  let total = 0;
  while (remainingHp > 0) {
    shots++;
    for (let i = 0; i < bulletsPerShot; i++) {
      let dmg = damage;
      if (remainingArmor > 0) {
        dmg = armorReducedDamage(dmg, penetrate);
        const toArmor = Math.min(dmg, remainingArmor);
        remainingArmor -= toArmor;
        dmg -= toArmor;
      }
      remainingHp -= dmg;
      total += damage;
      if (remainingHp <= 0) break;
    }
  }
  return { shots, totalDamage: total };
}

export function calculateBreakpoints(
  damage: number,
  bulletsPerShot: number,
  hp: number,
  armor: number,
  penetrate: boolean
): BreakPointResult[] {
  const results: BreakPointResult[] = [];
  for (let p = 0; p <= 100; p += 5) {
    const scale = damage * (p / 100);
    const { shots, totalDamage } = shotsToKill(scale, bulletsPerShot, hp, armor, penetrate);
    results.push({ percent: p, shots, totalDamage });
  }
  return results;
}
