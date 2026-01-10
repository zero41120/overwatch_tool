import { JUNO_MEDIBLASTER_METRIC_ID } from "../JunoMediblasterMetric";
import { getMetricOutputsForHero, metricOutputKey } from "../metricRegistry";

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
