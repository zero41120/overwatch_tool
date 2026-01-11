/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import undoable from "redux-undo";
import type { MetricOutputDescriptor } from "../../metrics/core/metricRegistry";
import { metricOutputKey } from "../../metrics/core/metricRegistry";
import inputReducer, { setWeightType } from "../../slices/inputSlice";
import tooltipReducer from "../../slices/tooltipSlice";
import WeightsSection from "../input_view/WeightsSection";

const metricOutputs: MetricOutputDescriptor[] = [
  {
    metricId: "demo",
    metricLabel: "Demo",
    outputKey: metricOutputKey("demo", "score"),
    displayLabel: "Demo: Score",
    id: "score",
    label: "Score",
    unit: "raw",
  },
  {
    metricId: "demo",
    metricLabel: "Demo",
    outputKey: metricOutputKey("demo", "burst"),
    displayLabel: "Demo: Burst",
    id: "burst",
    label: "Burst",
    unit: "burst",
  },
];

function renderWithStore() {
  const store = configureStore({
    reducer: {
      input: undoable(inputReducer),
      tooltip: tooltipReducer,
    },
  });
  const view = render(
    <Provider store={store}>
      <WeightsSection metricOutputs={metricOutputs} />
    </Provider>,
  );
  return { store, ...view };
}

describe("WeightsSection", () => {
  it("lists available metric outputs in the selector", () => {
    renderWithStore();

    expect(screen.getByText("Metric Weights")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Select output" }));

    expect(screen.getByText("Demo: Score")).toBeInTheDocument();
    expect(screen.getByText("Demo: Burst")).toBeInTheDocument();
  });

  it("labels weight inputs using the selected output", () => {
    const { store } = renderWithStore();

    act(() => {
      store.dispatch(
        setWeightType({
          index: 0,
          type: metricOutputKey("demo", "score"),
        }),
      );
    });

    expect(screen.getByLabelText("Weight for Demo: Score")).toBeInTheDocument();
  });
});
