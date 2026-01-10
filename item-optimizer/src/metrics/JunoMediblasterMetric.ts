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
  static readonly inputs = [] as const;
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
    _inputs: MetricResolvedInputValues<typeof JunoMediblasterMetric.inputs>,
  ): MetricOutputValues<typeof JunoMediblasterMetric.outputs> {
    const items = this.context.items.map((item) => ({ name: item.name }));
    const burst = computeMediblasterOutputFromMap({
      map: this.context.map,
      items,
      enemyHasArmor: this.context.enemyHasArmor,
      withReload: false,
    });
    const sustain = computeMediblasterOutputFromMap({
      map: this.context.map,
      items,
      enemyHasArmor: this.context.enemyHasArmor,
      withReload: true,
    });
    return { burst, sustain };
  }
}
