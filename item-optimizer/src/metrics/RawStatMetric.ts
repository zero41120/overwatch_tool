import type { MetricOutputDefinition } from "./core/ComputedMetric";
import { ComputedMetric } from "./core/ComputedMetric";
import type { MetricContext } from "./core/metricContext";

export const RAW_METRIC_ID = "raw";
export const RAW_METRIC_LABEL = "Raw Stats";

export function setRawStatMetricOutputs(
  attrTypes: string[],
  labeler: (value: string) => string,
) {
  RawStatMetric.outputs = attrTypes.map((attr) => ({
    id: attr,
    label: labeler(attr),
    unit: "raw",
  }));
}

export class RawStatMetric extends ComputedMetric<
  typeof RawStatMetric.inputs,
  typeof RawStatMetric.outputs
> {
  static readonly id = RAW_METRIC_ID;
  static readonly label = RAW_METRIC_LABEL;
  static readonly inputs = [] as const;
  static outputs: MetricOutputDefinition[] = [];

  private readonly context: MetricContext;

  constructor(context: MetricContext) {
    super();
    this.context = context;
  }

  evaluate() {
    const values: Record<string, number> = {};
    const outputs = (this.constructor as typeof RawStatMetric).outputs;
    outputs.forEach((output) => {
      values[output.id] = this.context.map.get(output.id) ?? 0;
    });
    return values;
  }
}
