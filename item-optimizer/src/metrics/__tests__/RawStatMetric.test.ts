import { describe, it, expect } from "vitest";
import { RawStatMetric, setRawStatMetricOutputs } from "../RawStatMetric";
import type { MetricContext } from "../metricContext";

describe("RawStatMetric", () => {
  it("evaluates to values from context map", () => {
    setRawStatMetricOutputs(["WP", "AP"], (v) => v);
    
    const context: MetricContext = {
      hero: "Juno",
      items: [],
      map: new Map([
        ["WP", 10],
        ["AP", 20],
      ]),
    };
    
    const metric = new RawStatMetric(context);
    const results = metric.evaluate();
    
    expect(results).toEqual({
      WP: 10,
      AP: 20,
    });
  });

  it("returns 0 for missing values", () => {
    setRawStatMetricOutputs(["WP"], (v) => v);
    
    const context: MetricContext = {
      hero: "Juno",
      items: [],
      map: new Map(),
    };
    
    const metric = new RawStatMetric(context);
    const results = metric.evaluate();
    
    expect(results).toEqual({
      WP: 0,
    });
  });
});
