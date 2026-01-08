export const MEDIBLASTER_OUTPUT_ATTR = "Mediblaster Output";
export const MEDIBLASTER_INPUT_ATTRS = ["WP", "AS", "Weapon Multiplier", "MA"] as const;

type MediblasterOutputItem = {
  name: string;
};

type MediblasterOutputArgs = {
  bulletValue?: number;
  weaponPower?: number;
  attackSpeed?: number;
  clipSize?: number;
  withReload?: boolean;
  items?: MediblasterOutputItem[];
  enemyHasArmor?: boolean;
};

type MediblasterOutputFromMapArgs = {
  map: Map<string, number>;
  bullet?: number;
  items?: MediblasterOutputItem[];
  enemyHasArmor?: boolean;
};

const CODEBREAKER_NAME = "CODEBREAKER";

function hasCodebreaker(items: MediblasterOutputItem[]) {
  return items.some((item) => item.name.toUpperCase() === CODEBREAKER_NAME);
}

function armorReducedDamage(dmg: number, penetrate: boolean): number {
  const flat = penetrate ? 3.5 : 7;
  const cap = penetrate ? 0.25 : 0.5;
  const reduction = Math.min(flat, dmg * cap);
  return dmg - reduction;
}

function mediblasterOutput({
  bulletValue = 7.5,
  weaponPower = 100,
  attackSpeed = 100,
  clipSize = 180,
  withReload = true,
  items = [],
  enemyHasArmor = false,
}: MediblasterOutputArgs) {
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

  const rawBulletDamage = bulletValue * weaponPowerPercent;
  const applyArmor = enemyHasArmor && rawBulletDamage > 0;
  const effectiveBulletDamage = applyArmor
    ? armorReducedDamage(rawBulletDamage, hasCodebreaker(items))
    : rawBulletDamage;
  const totalDamage = clipSize * effectiveBulletDamage;

  return totalDamage * (TPS / cycleFrames);
}

export function computeMediblasterOutputFromMap({
  map,
  bullet = 7.5,
  items = [],
  enemyHasArmor = false,
}: MediblasterOutputFromMapArgs): number {
  const wp = 100 + (map.get("WP") ?? 0);
  const wm = 1 + (map.get("Weapon Multiplier") ?? 0) / 100;
  const as = 100 + (map.get("AS") ?? 0);
  const maxAmmo = 1 + (map.get("MA") ?? 0) / 100;
  const clipSize = Math.max(1, Math.round(180 * maxAmmo));
  return Number(
    mediblasterOutput({
      bulletValue: bullet * wm,
      weaponPower: wp,
      attackSpeed: as,
      clipSize,
      withReload: true,
      items,
      enemyHasArmor,
    }).toFixed(0),
  );
}

export function includeMediblasterInputs(set: Set<string>) {
  if (!set.has(MEDIBLASTER_OUTPUT_ATTR)) return;
  MEDIBLASTER_INPUT_ATTRS.forEach((attr) => set.add(attr));
}
