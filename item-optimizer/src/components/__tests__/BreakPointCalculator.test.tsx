/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { act, fireEvent, render } from "@testing-library/react";
import type { ReactElement } from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import undoable from "redux-undo";
import BreakPointCalculator from "../BreakPointCalculator";
import inputReducer from "../../slices/inputSlice";
import tooltipReducer from "../../slices/tooltipSlice";
import { setHero } from "../../slices/inputSlice";
import type { Item } from "../../types";

function renderWithStore(ui: ReactElement) {
  const store = configureStore({
    reducer: {
      input: undoable(inputReducer),
      tooltip: tooltipReducer,
    },
  });
  return { store, ...render(<Provider store={store}>{ui}</Provider>) };
}

describe("BreakPointCalculator", () => {
  it("shows results after calculation", () => {
    const { getByText, getAllByRole } = renderWithStore(<BreakPointCalculator items={[]} />);
    fireEvent.click(getByText("Calculate"));
    // there are 21 rows from 100 to 200 step 5
    const rows = getAllByRole("row");
    // first row is header
    expect(rows.length).toBeGreaterThan(1);
  });

  it("renders Juno torpedo breakpoints when hero is set to Juno", async () => {
    const items: Item[] = [
      {
        id: "pd",
        name: "PULSTAR DESTROYERS",
        cost: 10000,
        tab: "weapon",
        rarity: "rare",
        attributes: [
          {
            type: "description",
            value:
              '<b>[Pulsar Torpedoes]</b> explode on hit, dealing <b class="stat-ap">20</b> damage.',
          },
        ],
      },
      {
        id: "mark",
        name: "MARK OF THE KITSUNE",
        cost: 11000,
        tab: "ability",
        rarity: "epic",
        attributes: [
          { type: "AP", value: "10%" },
          {
            type: "description",
            value:
              'When you use an ability, your next instance of Weapon Damage or Healing deals <b class="stat-ap">25</b> bonus damage or healing.',
          },
        ],
      },
    ];

    const { store, findByText, findAllByText } = renderWithStore(
      <BreakPointCalculator items={items} />,
    );
    await act(async () => {
      store.dispatch(setHero("Juno"));
    });

    const computeButton = await findByText("Compute breakpoints");

    await act(async () => {
      fireEvent.click(computeButton);
    });

    expect(await findByText("Budget")).toBeInTheDocument();
    const skylineMentions = await findAllByText(/Skyline Nanites/i);
    expect(skylineMentions.length).toBeGreaterThan(0);
  });
});
