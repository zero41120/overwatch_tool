import { ComputedMetric } from "../ComputedMetric";
import type { MetricContext } from "../metricContext";

class DemoMetric extends ComputedMetric<
  typeof DemoMetric.inputs,
  typeof DemoMetric.outputs
> {
  static readonly id = "demo";
  static readonly label = "Demo Metric";
  static readonly inputs = [
    {
      id: "includeBonus",
      label: "Include Bonus",
      type: "bool",
      defaultValue: false,
    },
    {
      id: "multiplier",
      label: "Multiplier",
      type: "number",
      defaultValue: 1,
      min: 0,
      max: 3,
    },
  ] as const;
  static readonly outputs = [
    {
      id: "burst",
      label: "Burst",
      unit: "burst",
      description: "Short window output",
    },
    {
      id: "sustain",
      label: "Sustain",
      unit: "sustain",
      description: "Extended output",
    },
  ] as const;

  evaluate(
    inputs: MetricResolvedInputValues<typeof DemoMetric.inputs>,
  ): MetricOutputValues<typeof DemoMetric.outputs> {
    const multiplier = (inputs.multiplier ?? 0) as number;
    const includeBonus = Boolean(inputs.includeBonus);
    return {
      burst: multiplier * (includeBonus ? 2 : 1),
      sustain: multiplier + (includeBonus ? 1 : 0),
    };
  }
}

test("ComputedMetric resolves defaults for optional inputs", () => {
  expect(DemoMetric.resolveInputs()).toEqual({
    includeBonus: false,
    multiplier: 1,
  });
});

test("ComputedMetric clamps number inputs to min/max", () => {
  expect(DemoMetric.resolveInputs({ multiplier: 10 })).toEqual({
    includeBonus: false,
    multiplier: 3,
  });
  expect(DemoMetric.resolveInputs({ multiplier: -2 })).toEqual({
    includeBonus: false,
    multiplier: 0,
  });
});

test("ComputedMetric outputs expose metadata and evaluation", () => {
  const metric = new DemoMetric();
  expect(DemoMetric.outputs).toEqual([
    {
      id: "burst",
      label: "Burst",
      unit: "burst",
      description: "Short window output",
    },
    {
      id: "sustain",
      label: "Sustain",
      unit: "sustain",
      description: "Extended output",
    },
  ]);
  const results = metric.evaluateWithDefaults({
    includeBonus: true,
    multiplier: 2,
  });
  expect(results).toEqual({ burst: 4, sustain: 3 });
});
