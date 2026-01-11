/* @vitest-environment jsdom */
import { configureStore } from "@reduxjs/toolkit";
import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import undoable from "redux-undo";
import { JUNO_MEDIBLASTER_METRIC_ID } from "../../metrics/JunoMediblasterMetric";
import { metricOutputKey } from "../../metrics/core/metricRegistry";
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

    expect(screen.queryByLabelText("Enemy Has Armor")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Ammo Scaling Multiplier")).not.toBeInTheDocument();
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

    const armorToggle = screen.getByLabelText("Enemy Has Armor");
    const ammoMultiplier = screen.getByLabelText("Ammo Scaling Multiplier");
    const reloadToggle = screen.getByLabelText("Include Reload Downtime");
    const reloadMultiplier = screen.getByLabelText("Reload Downtime Multiplier");

    expect(armorToggle).toBeInTheDocument();
    expect(armorToggle).not.toBeChecked();
    expect(ammoMultiplier).toBeInTheDocument();
    expect(ammoMultiplier).toHaveAttribute("min", "0");
    expect(ammoMultiplier).toHaveAttribute("max", "2");
    expect(ammoMultiplier).toHaveValue(1);
    expect(reloadToggle).toBeInTheDocument();
    expect(reloadToggle).toBeChecked();
    expect(reloadMultiplier).toBeInTheDocument();
    expect(reloadMultiplier).toHaveAttribute("min", "0");
    expect(reloadMultiplier).toHaveAttribute("max", "2");
    expect(reloadMultiplier).toHaveValue(1);
  });
});
