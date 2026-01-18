import { buildTorpedoItem, computeJunoTorpedoDamage, TORPEDO_BASE_DAMAGE } from "../utils/junoTorpedoDamage";
import type { OptimizerExtraField } from "../utils/optimizerParetoTypes";
import type { MetricOutputValues, MetricResolvedInputValues } from "./core/ComputedMetric";
import { ComputedMetric } from "./core/ComputedMetric";
import type { MetricContext } from "./core/metricContext";

export const JUNO_TORPEDO_METRIC_ID = "juno-torpedo";

const DEFAULT_TORPEDO_COOLDOWN_SECONDS = 10;

export class JunoTorpedoMetric extends ComputedMetric<
  typeof JunoTorpedoMetric.inputs,
  typeof JunoTorpedoMetric.outputs
> {
  static readonly id = JUNO_TORPEDO_METRIC_ID;
  static readonly label = "Torpedoes";
  static readonly description = "Pulsar Torpedo damage with burst and cooldown-adjusted sustain.";
  static readonly hero = "Juno";
  static readonly inputAttributes = ["AP"] as const;
  static readonly inputs = [
    {
      id: "baseDamage",
      label: "Base Torpedo Damage",
      type: "number",
      defaultValue: TORPEDO_BASE_DAMAGE,
      min: 0,
      step: 1,
      description: "Base damage before AP scaling or item additions.",
    },
    {
      id: "cooldownSeconds",
      label: "Cooldown (Seconds)",
      type: "number",
      defaultValue: DEFAULT_TORPEDO_COOLDOWN_SECONDS,
      min: 0.1,
      step: 0.1,
      description: "Cooldown used to compute sustained output.",
    },
  ] as const;
  static readonly outputs = [
    {
      id: "burst",
      label: "Burst Damage",
      unit: "burst",
      description: "Single-hit torpedo damage.",
    },
    {
      id: "sustain",
      label: "Sustain DPS",
      unit: "sustain",
      description: "Average damage per second based on cooldown.",
    },
  ] as const;
  static getOptimizerExtraFields(): OptimizerExtraField[] {
    return [
      {
        id: "torpedo-base-add",
        combine: "sum",
        itemValue: (item) => buildTorpedoItem(item).baseAdd,
      },
      {
        id: "torpedo-skyline",
        combine: "max",
        itemValue: (item) => (/^skyline\s+nanites$/i.test(item.name) ? 1 : 0),
      },
    ];
  }

  private readonly context: MetricContext;

  constructor(context: MetricContext) {
    super();
    this.context = context;
  }

  evaluate(
    inputs: MetricResolvedInputValues<typeof JunoTorpedoMetric.inputs>,
  ): MetricOutputValues<typeof JunoTorpedoMetric.outputs> {
    const baseDamage = Number(inputs.baseDamage ?? TORPEDO_BASE_DAMAGE);
    const burst = computeJunoTorpedoDamage(this.context.items, baseDamage);
    const cooldownSeconds = Math.max(0.1, Number(inputs.cooldownSeconds ?? DEFAULT_TORPEDO_COOLDOWN_SECONDS));
    return {
      burst,
      sustain: burst / cooldownSeconds,
    };
  }
}
