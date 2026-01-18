import type { MetricClass } from "./metricTypes";

type MetricModule = Record<string, unknown>;

function isMetricClass(value: unknown): value is MetricClass {
  if (typeof value !== "function") return false;
  const candidate = value as MetricClass;
  return (
    typeof candidate.id === "string" &&
    typeof candidate.label === "string" &&
    Array.isArray(candidate.inputs) &&
    Array.isArray(candidate.outputs) &&
    typeof candidate.resolveInputs === "function"
  );
}

export function loadMetricClasses(
  modules: Record<string, MetricModule>,
): MetricClass[] {
  const metrics: MetricClass[] = [];
  if (Object.keys(modules).length === 0) {
    console.warn("[metrics] No metric modules found via auto-discovery");
    return metrics;
  }
  Object.entries(modules).forEach(([path, moduleExports]) => {
    if (path.includes("/__tests__/") || path.endsWith("ComputedMetric.ts")) {
      return;
    }
    const candidates = Object.values(moduleExports ?? {});
    const moduleMetrics = candidates.filter(isMetricClass);
    if (moduleMetrics.length === 0) {
      console.warn(`[metrics] No metric class found in ${path}`);
      return;
    }
    moduleMetrics.forEach((metric) => metrics.push(metric));
  });
  return metrics;
}
