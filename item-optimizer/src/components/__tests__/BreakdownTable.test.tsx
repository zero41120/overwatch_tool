/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import BreakdownTable from "../results_view/BreakdownTable";
import type { ResultCombo } from "../../types";

describe("BreakdownTable", () => {
  it("groups rows by unit type and shows value, weight, contribution", () => {
    const results: ResultCombo = {
      items: [],
      cost: 0,
      score: 0,
      metricValues: {},
      breakdown: [
        { type: "AP", sum: 5, weight: 1, contrib: 5, unit: "raw" },
        { type: "metric:custom:burst", sum: 12, weight: 1.5, contrib: 18, unit: "burst" },
        { type: "metric:custom:utility", sum: 3, weight: 0.25, contrib: 0.75, unit: "utility" },
      ],
    };

    const { getByText } = render(<BreakdownTable results={results} />);

    expect(getByText("Raw")).toBeInTheDocument();
    expect(getByText("Burst")).toBeInTheDocument();
    expect(getByText("Utility")).toBeInTheDocument();
    expect(getByText("Ability Power")).toBeInTheDocument();
    expect(getByText("12.00")).toBeInTheDocument();
    expect(getByText("1.50")).toBeInTheDocument();
    expect(getByText("18.00")).toBeInTheDocument();
  });
});
