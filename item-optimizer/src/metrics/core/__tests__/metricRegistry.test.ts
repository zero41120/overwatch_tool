import { vi } from "vitest";
import { ComputedMetric } from "../ComputedMetric";
import { JUNO_MEDIBLASTER_METRIC_ID } from "../../JunoMediblasterMetric";
import { loadMetricClasses } from "../metricDiscovery";
import {
  RAW_METRIC_ID,
  RAW_METRIC_LABEL,
  buildMetricOutputDescriptors,
  getMetricOutputsForHero,
  metricOutputKey,
} from "../metricRegistry";

class DemoAutoMetric extends ComputedMetric<
  typeof DemoAutoMetric.inputs,
  typeof DemoAutoMetric.outputs
> {
  static readonly id = "demo-auto";
  static readonly label = "Demo Auto";
  static readonly inputs = [] as const;
  static readonly outputs = [
    {
      id: "score",
      label: "Score",
      unit: "raw",
    },
  ] as const;

  evaluate() {
    return { score: 1 };
  }
}

class HeroOnlyMetric extends ComputedMetric<
  typeof HeroOnlyMetric.inputs,
  typeof HeroOnlyMetric.outputs
> {
  static readonly id = "hero-only";
  static readonly label = "Hero Only";
  static readonly hero = "Juno";
  static readonly inputs = [] as const;
  static readonly outputs = [
    {
      id: "score",
      label: "Score",
      unit: "raw",
    },
  ] as const;

  evaluate() {
    return { score: 1 };
  }
}

class MultiHeroMetric extends ComputedMetric<
  typeof MultiHeroMetric.inputs,
  typeof MultiHeroMetric.outputs
> {
  static readonly id = "multi-hero";
  static readonly label = "Multi Hero";
  static readonly hero = ["Juno", "Reaper"] as const;
  static readonly inputs = [] as const;
  static readonly outputs = [
    {
      id: "score",
      label: "Score",
      unit: "raw",
    },
  ] as const;

  evaluate() {
    return { score: 1 };
  }
}

test("metric discovery loads metric classes from module exports", () => {
  const metrics = loadMetricClasses({
    "./DemoAutoMetric.ts": { DemoAutoMetric },
  });

  expect(metrics).toEqual([DemoAutoMetric]);
});

test("metric discovery warns when no metric class is found", () => {
  const warn = vi.spyOn(console, "warn").mockImplementation(() => {});

  loadMetricClasses({ "./Empty.ts": { notAMetric: {} } });

  expect(warn).toHaveBeenCalledWith(
    expect.stringContaining("No metric class found"),
  );
  warn.mockRestore();
});

test("metric discovery warns when no modules are provided", () => {
  const warn = vi.spyOn(console, "warn").mockImplementation(() => {});

  const metrics = loadMetricClasses({});

  expect(metrics).toEqual([]);
  expect(warn).toHaveBeenCalledWith(
    expect.stringContaining("No metric modules found"),
  );
  warn.mockRestore();
});

test("metric registry exposes multiple outputs for a single metric", () => {
  const outputs = getMetricOutputsForHero("Juno");
  const burstKey = metricOutputKey(JUNO_MEDIBLASTER_METRIC_ID, "burst");
  const sustainKey = metricOutputKey(JUNO_MEDIBLASTER_METRIC_ID, "sustain");

  const burst = outputs.find((output) => output.outputKey === burstKey);
  const sustain = outputs.find((output) => output.outputKey === sustainKey);

  expect(burst).toEqual(
    expect.objectContaining({
      outputKey: burstKey,
      displayLabel: "Mediblaster: Burst Output",
    }),
  );
  expect(sustain).toEqual(
    expect.objectContaining({
      outputKey: sustainKey,
      displayLabel: "Mediblaster: Sustain Output",
    }),
  );
});

test("metric registry hides hero-scoped outputs for other heroes", () => {
  const outputs = getMetricOutputsForHero("Reaper");
  const burstKey = metricOutputKey(JUNO_MEDIBLASTER_METRIC_ID, "burst");

  expect(outputs.some((output) => output.outputKey === burstKey)).toBe(false);
});

test("metric registry filters hero-scoped outputs", () => {
  const outputsForJuno = buildMetricOutputDescriptors(
    [DemoAutoMetric, HeroOnlyMetric, MultiHeroMetric],
    "Juno",
  );
  const outputsForReaper = buildMetricOutputDescriptors(
    [DemoAutoMetric, HeroOnlyMetric, MultiHeroMetric],
    "Reaper",
  );
  const outputsForMercy = buildMetricOutputDescriptors(
    [DemoAutoMetric, HeroOnlyMetric, MultiHeroMetric],
    "Mercy",
  );

  const outputIds = (outputs: { metricId: string }[]) =>
    outputs.map((output) => output.metricId).sort();

  expect(outputIds(outputsForJuno)).toEqual(["demo-auto", "hero-only", "multi-hero"]);
  expect(outputIds(outputsForReaper)).toEqual(["demo-auto", "multi-hero"]);
  expect(outputIds(outputsForMercy)).toEqual(["demo-auto"]);
});
