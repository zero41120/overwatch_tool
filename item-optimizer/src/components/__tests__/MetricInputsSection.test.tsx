/* @vitest-environment jsdom */
import { configureStore } from "@reduxjs/toolkit";
import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import undoable from "redux-undo";
import { JUNO_MEDIBLASTER_METRIC_ID } from "../../metrics/JunoMediblasterMetric";
import { metricOutputKey } from "../../metrics/metricRegistry";
import inputReducer, { setWeightType } from "../../slices/inputSlice";
import tooltipReducer from "../../slices/tooltipSlice";
import MetricInputsSection from "../input_view/MetricInputsSection";

function renderWithStore() {
  const store = configureStore({
    reducer: {
      input: undoable(inputReducer),
      tooltip: tooltipReducer,
    },
  });
  const view = render(
    <Provider store={store}>
      <MetricInputsSection />
    </Provider>,
  );
  return { store, ...view };
}

describe("MetricInputsSection", () => {
  it("renders metric inputs only when a metric output is selected", () => {
    const { store } = renderWithStore();

    expect(screen.queryByLabelText("Include Reload Downtime")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Reload Downtime Multiplier")).not.toBeInTheDocument();

    act(() => {
      store.dispatch(
        setWeightType({
          index: 0,
          type: metricOutputKey(JUNO_MEDIBLASTER_METRIC_ID, "burst"),
        }),
      );
    });

    const toggle = screen.getByLabelText("Include Reload Downtime");
    const multiplier = screen.getByLabelText("Reload Downtime Multiplier");

    expect(toggle).toBeInTheDocument();
    expect(toggle).toBeChecked();
    expect(multiplier).toBeInTheDocument();
    expect(multiplier).toHaveAttribute("min", "0");
    expect(multiplier).toHaveAttribute("max", "2");
    expect(multiplier).toHaveValue(1);
  });
});
