export const MEDIBLASTER_OUTPUT_ATTR = "Mediblaster Output";
export const MEDIBLASTER_INPUT_ATTRS = ["WP", "AS", "Weapon Multiplier", "MA"] as const;

function mediblasterOutput(bulletValue = 7.5, weaponPower = 100, attackSpeed = 100, clipSize = 180, withReload = true) {
  const TPS = 60;
  const RELOAD_FRAMES = withReload ? 1.5 * TPS : 0;
  const COCKING_FRAMES = 0.3 * TPS;
  const RECOVERY_FRAMES = 0.45 * TPS;
  const INTRA_BURST_INTERVAL_FRAMES = 0.03 * TPS;
  const VOLLEY_SIZE = 12;

  const attackSpeedPercent = attackSpeed / 100;
  const weaponPowerPercent = weaponPower / 100;
  const cockingFrames = Math.ceil(COCKING_FRAMES / attackSpeedPercent);

  let cycleFrames = RELOAD_FRAMES + cockingFrames;
  const singleRecoveryFrame = Math.ceil(RECOVERY_FRAMES / attackSpeedPercent);
  for (let i = 1; i <= clipSize; i++) {
    const isFirstBulletOfVolley = (i - 1) % VOLLEY_SIZE === 0;
    if (!isFirstBulletOfVolley) cycleFrames += INTRA_BURST_INTERVAL_FRAMES;
    const isEndOfVolley = i % VOLLEY_SIZE === 0;
    const hasAmmoLeft = i < clipSize;
    if (isEndOfVolley && hasAmmoLeft) cycleFrames += singleRecoveryFrame;
  }

  const totalDamage = clipSize * bulletValue * weaponPowerPercent;

  return totalDamage * (TPS / cycleFrames);
}

export function computeMediblasterOutputFromMap(map: Map<string, number>, bullet = 7.5): number {
  const wp = 100 + (map.get("WP") ?? 0);
  const wm = 1 + (map.get("Weapon Multiplier") ?? 0) / 100;
  const as = 100 + (map.get("AS") ?? 0);
  const maxAmmo = 1 + (map.get("MA") ?? 0) / 100;
  const clipSize = Math.max(1, Math.round(180 * maxAmmo));
  return Number(mediblasterOutput(bullet * wm, wp, as, clipSize, true).toFixed(0));
}

export function includeMediblasterInputs(set: Set<string>) {
  if (!set.has(MEDIBLASTER_OUTPUT_ATTR)) return;
  MEDIBLASTER_INPUT_ATTRS.forEach((attr) => set.add(attr));
}
