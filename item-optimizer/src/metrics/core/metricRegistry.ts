import type { MetricContext } from "./metricContext";
import { loadMetricClasses } from "./metricDiscovery";
import type {
  MetricClass,
  MetricInputGroup,
  MetricInputValuesByMetric,
  MetricOutputDescriptor,
} from "./metricTypes";
import type { WeightRow } from "../../types";
import type { OptimizerExtraField } from "../../utils/optimizerParetoTypes";

export const METRIC_OUTPUT_PREFIX = "metric:";
export const RAW_METRIC_ID = "raw";
export const RAW_METRIC_LABEL = "Raw Stats";

export type {
  MetricClass,
  MetricInputGroup,
  MetricInputValuesByMetric,
  MetricOutputDescriptor,
} from "./metricTypes";

const METRICS = loadMetricClasses(
  import.meta.glob("../*Metric.ts", { eager: true }) as Record<
    string,
    Record<string, unknown>
  >,
);

function metricAppliesToHero(metric: MetricClass, hero: string) {
  if (!metric.hero) return true;
  if (Array.isArray(metric.hero)) return metric.hero.includes(hero);
  return metric.hero === hero;
}

export function metricOutputKey(metricId: string, outputId: string) {
  if (metricId === RAW_METRIC_ID) return outputId;
  return `${METRIC_OUTPUT_PREFIX}${metricId}:${outputId}`;
}

export function parseMetricOutputKey(value: string) {
  if (!value.startsWith(METRIC_OUTPUT_PREFIX)) {
    return { metricId: RAW_METRIC_ID, outputId: value };
  }
  const trimmed = value.slice(METRIC_OUTPUT_PREFIX.length);
  const [metricId, outputId] = trimmed.split(":");
  if (!metricId || !outputId) return null;
  return { metricId, outputId };
}

export function isMetricOutputKey(value: string) {
  return value.startsWith(METRIC_OUTPUT_PREFIX);
}

export function buildMetricOutputDescriptors(
  metrics: MetricClass[],
  hero: string,
): MetricOutputDescriptor[] {
  return metrics
    .filter((metric) => metricAppliesToHero(metric, hero))
    .flatMap((metric) =>
      metric.outputs.map((output) => ({
        ...output,
        metricId: metric.id,
        metricLabel: metric.label,
        metricDescription: metric.description,
        outputKey: metricOutputKey(metric.id, output.id),
        displayLabel: `${metric.label}: ${output.label}`,
      })),
    );
}

export function getMetricOutputsForHero(hero: string) {
  return buildMetricOutputDescriptors(METRICS, hero);
}

export function getMetricOutputLabel(value: string) {
  const parsed = parseMetricOutputKey(value);
  if (!parsed) return null;
  for (const metric of METRICS) {
    if (metric.id !== parsed.metricId) continue;
    const output = metric.outputs.find((candidate) => candidate.id === parsed.outputId);
    if (!output) return null;
    return `${metric.label}: ${output.label}`;
  }
  return null;
}

export function collectMetricInputAttributes(selectedOutputs: Iterable<string>) {
  const selected = new Set(selectedOutputs);
  const attrs = new Set<string>();
  METRICS.forEach((metric) => {
    const outputKeys = metric.outputs.map((output) => metricOutputKey(metric.id, output.id));
    if (!outputKeys.some((key) => selected.has(key))) return;
    metric.inputAttributes?.forEach((attr) => attrs.add(attr));
  });
  return attrs;
}

export function getSelectedMetricOutputKeys(weights: WeightRow[]) {
  return new Set(weights.map((row) => row.type).filter(isMetricOutputKey));
}

export function hasMetricOutputForMetric(metricId: string, outputKeys: Iterable<string>) {
  for (const outputKey of outputKeys) {
    const parsed = parseMetricOutputKey(outputKey);
    if (parsed?.metricId === metricId) return true;
  }
  return false;
}

export function getMetricInputGroupsForHero(
  hero: string,
  selectedOutputs: Iterable<string>,
  inputValues?: MetricInputValuesByMetric,
): MetricInputGroup[] {
  const selected = new Set(selectedOutputs);
  return METRICS.filter((metric) => metricAppliesToHero(metric, hero))
    .filter((metric) => metric.inputs.length > 0)
    .filter((metric) =>
      metric.outputs.some((output) => selected.has(metricOutputKey(metric.id, output.id))),
    )
    .map((metric) => ({
      metricId: metric.id,
      metricLabel: metric.label,
      metricDescription: metric.description,
      inputs: metric.inputs,
      resolvedInputs: metric.resolveInputs(inputValues?.[metric.id] ?? {}),
    }));
}

export function computeMetricOutputs(
  context: MetricContext,
  selectedOutputs?: Set<string>,
  inputValues?: MetricInputValuesByMetric,
) {
  const outputs = new Map<string, number>();
  METRICS.forEach((metric) => {
    if (!metricAppliesToHero(metric, context.hero)) return;
    const outputKeys = metric.outputs.map((output) => metricOutputKey(metric.id, output.id));
    if (selectedOutputs && !outputKeys.some((key) => selectedOutputs.has(key))) return;
    const instance = new metric(context);
    const values = instance.evaluateWithDefaults(inputValues?.[metric.id] ?? {});
    metric.outputs.forEach((output) => {
      const key = metricOutputKey(metric.id, output.id);
      if (selectedOutputs && !selectedOutputs.has(key)) return;
      outputs.set(key, values[output.id] ?? 0);
    });
  });
  return outputs;
}

export function collectMetricExtraFields(
  hero: string,
  selectedOutputs: Set<string>,
  inputValues?: MetricInputValuesByMetric,
): OptimizerExtraField[] {
  const extras: OptimizerExtraField[] = [];
  METRICS.forEach((metric) => {
    if (!metricAppliesToHero(metric, hero)) return;
    const outputKeys = metric.outputs.map((output) => metricOutputKey(metric.id, output.id));
    if (!outputKeys.some((key) => selectedOutputs.has(key))) return;
    if (typeof metric.getOptimizerExtraFields !== "function") return;
    const resolvedInputs = metric.resolveInputs(inputValues?.[metric.id] ?? {});
    const metricExtras = metric.getOptimizerExtraFields(resolvedInputs);
    if (metricExtras?.length) {
      metricExtras.forEach((extra) => extras.push(extra));
    }
  });
  return extras;
}
