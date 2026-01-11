import type {
  ComputedMetric,
  MetricInputDefinition,
  MetricInputValue,
  MetricInputValues,
  MetricOutputDefinition,
} from "./ComputedMetric";
import type { MetricContext } from "./metricContext";
import type { OptimizerExtraField } from "../utils/optimizerParetoTypes";

export type MetricClass = {
  new (context: MetricContext): ComputedMetric;
  id: string;
  label: string;
  description?: string;
  hero?: string | readonly string[];
  inputs: readonly MetricInputDefinition[];
  outputs: readonly MetricOutputDefinition[];
  inputAttributes?: readonly string[];
  resolveInputs: (values?: MetricInputValues) => Record<string, MetricInputValue>;
  getOptimizerExtraFields?: (
    inputs: Record<string, MetricInputValue>,
  ) => OptimizerExtraField[];
};

export type MetricOutputDescriptor = MetricOutputDefinition & {
  metricId: string;
  metricLabel: string;
  metricDescription?: string;
  outputKey: string;
  displayLabel: string;
};

export type MetricInputValuesByMetric = Record<string, MetricInputValues>;

export type MetricInputGroup = {
  metricId: string;
  metricLabel: string;
  metricDescription?: string;
  inputs: readonly MetricInputDefinition[];
  resolvedInputs: Record<string, MetricInputValue>;
};
