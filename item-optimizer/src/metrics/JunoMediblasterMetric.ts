import type { MetricResolvedInputValues, MetricOutputValues } from "./core/ComputedMetric";
import { ComputedMetric } from "./core/ComputedMetric";
import type { MetricContext } from "./core/metricContext";
import type { OptimizerExtraField } from "../utils/optimizerParetoTypes";

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
  withReload?: boolean;
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
  withReload = true,
}: MediblasterOutputFromMapArgs): number {
  const wp = 100 + (map.get("WP") ?? 0);
  const wm = 1 + (map.get("Weapon Multiplier") ?? 0) / 100;
  const as = 100 + (map.get("AS") ?? 0);
  const maxAmmoBonus = (map.get("MA") ?? 0) / 100;
  const scaledMaxAmmo = 1 + maxAmmoBonus;
  const clipSize = Math.max(1, Math.round(180 * scaledMaxAmmo));
  return Number(
    mediblasterOutput({
      bulletValue: bullet * wm,
      weaponPower: wp,
      attackSpeed: as,
      clipSize,
      withReload,
      items,
      enemyHasArmor,
    }).toFixed(0),
  );
}

export const JUNO_MEDIBLASTER_METRIC_ID = "juno-mediblaster";

export class JunoMediblasterMetric extends ComputedMetric<
  typeof JunoMediblasterMetric.inputs,
  typeof JunoMediblasterMetric.outputs
> {
  static readonly id = JUNO_MEDIBLASTER_METRIC_ID;
  static readonly label = "Mediblaster";
  static readonly description = "Juno mediblaster output with and without reload downtime.";
  static readonly hero = "Juno";
  static readonly inputAttributes = MEDIBLASTER_INPUT_ATTRS;
  static readonly inputs = [
    {
      id: "enemyHasArmor",
      label: "Enemy Has Armor",
      type: "bool",
      defaultValue: false,
      description: "Apply armor reduction (Codebreaker mitigates the reduction).",
    },
    {
      id: "includeReloadDowntime",
      label: "Include Reload Downtime",
      type: "bool",
      defaultValue: true,
      description: "When enabled, sustain output includes reload downtime.",
    },
    {
      id: "reloadDowntimeMultiplier",
      label: "Reload Downtime Multiplier",
      type: "number",
      defaultValue: 1,
      min: 0,
      max: 2,
      step: 0.1,
      description: "Scale the impact of reload downtime on sustain output.",
    },
  ] as const;
  static readonly outputs = [
    {
      id: "burst",
      label: "Burst Output",
      unit: "burst",
      description: "Burst output without reload downtime.",
    },
    {
      id: "sustain",
      label: "Sustain Output",
      unit: "sustain",
      description: "Sustained output including reload downtime.",
    },
  ] as const;
  static getOptimizerExtraFields(
    inputs: MetricResolvedInputValues<typeof JunoMediblasterMetric.inputs>,
  ): OptimizerExtraField[] {
    if (!inputs.enemyHasArmor) return [];
    return [
      {
        id: "mediblaster-codebreaker",
        combine: "max",
        itemValue: (item) => (item.name.toUpperCase() === CODEBREAKER_NAME ? 1 : 0),
      },
    ];
  }

  private readonly context: MetricContext;

  constructor(context: MetricContext) {
    super();
    this.context = context;
  }

  evaluate(
    inputs: MetricResolvedInputValues<typeof JunoMediblasterMetric.inputs>,
  ): MetricOutputValues<typeof JunoMediblasterMetric.outputs> {
    const items = this.context.items.map((item) => ({ name: item.name }));
    const enemyHasArmor = Boolean(inputs.enemyHasArmor);
    const burst = computeMediblasterOutputFromMap({
      map: this.context.map,
      items,
      enemyHasArmor,
      withReload: false,
    });
    const baseSustain = computeMediblasterOutputFromMap({
      map: this.context.map,
      items,
      enemyHasArmor,
      withReload: true,
    });
    const includeReload = Boolean(inputs.includeReloadDowntime);
    const multiplier = Number(inputs.reloadDowntimeMultiplier ?? 1);
    let sustain = baseSustain;
    if (!includeReload) {
      sustain = burst;
    } else if (multiplier !== 1) {
      const downtime = burst - baseSustain;
      sustain = burst - downtime * multiplier;
    }
    return { burst, sustain };
  }
}