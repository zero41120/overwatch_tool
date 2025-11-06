/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import undoable from "redux-undo";

import BreakPointCalculator from "../BreakPointCalculator";
import inputReducer, { setHero } from "../../slices/inputSlice";
import tooltipReducer from "../../slices/tooltipSlice";
import type { Item } from "../../types";

function createStore() {
  return configureStore({
    reducer: {
      input: undoable(inputReducer),
      tooltip: tooltipReducer,
    },
  });
}

const sampleItems: Item[] = [
  {
    id: "i_test",
    name: "MARK OF THE KITSUNE",
    cost: 11000,
    attributes: [
      { type: "AP", value: "10%" },
      { type: "description", value: "When you use an ability, your next instance deals <b class=\"stat-ap\">25</b> bonus damage." },
    ],
    tab: "weapon",
    rarity: "epic",
  },
];

describe("BreakPointCalculator", () => {
  it("shows results after calculation", () => {
    const store = createStore();
    const { getByText, getAllByRole } = render(
      <Provider store={store}>
        <BreakPointCalculator items={sampleItems} />
      </Provider>,
    );
    fireEvent.click(getByText("Calculate"));
    const rows = getAllByRole("row");
    expect(rows.length).toBeGreaterThan(1);
  });

  it("renders Juno torpedo controls when hero is Juno", async () => {
    const store = createStore();
    store.dispatch(setHero("Juno"));
    const { findByText } = render(
      <Provider store={store}>
        <BreakPointCalculator items={sampleItems} />
      </Provider>,
    );
    expect(await findByText("Juno Torpedo Breakpoints")).toBeInTheDocument();
  });
});
