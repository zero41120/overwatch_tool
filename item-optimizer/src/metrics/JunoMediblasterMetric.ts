import type { MetricResolvedInputValues, MetricOutputValues } from "./ComputedMetric";
import { ComputedMetric } from "./ComputedMetric";
import type { MetricContext } from "./metricContext";
import { computeMediblasterOutputFromMap, MEDIBLASTER_INPUT_ATTRS } from "../utils/junoMediblaster";

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

  private readonly context: MetricContext;

  constructor(context: MetricContext) {
    super();
    this.context = context;
  }

  evaluate(
    inputs: MetricResolvedInputValues<typeof JunoMediblasterMetric.inputs>,
  ): MetricOutputValues<typeof JunoMediblasterMetric.outputs> {
    const items = this.context.items.map((item) => ({ name: item.name }));
    const burst = computeMediblasterOutputFromMap({
      map: this.context.map,
      items,
      enemyHasArmor: this.context.enemyHasArmor,
      withReload: false,
    });
    const baseSustain = computeMediblasterOutputFromMap({
      map: this.context.map,
      items,
      enemyHasArmor: this.context.enemyHasArmor,
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
