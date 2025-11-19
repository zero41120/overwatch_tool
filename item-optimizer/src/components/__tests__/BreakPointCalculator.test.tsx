/* @vitest-environment jsdom */
import { configureStore } from "@reduxjs/toolkit";
import "@testing-library/jest-dom";
import { act, fireEvent, render } from "@testing-library/react";
import type { ReactElement } from "react";
import { Provider } from "react-redux";
import undoable from "redux-undo";
import inputReducer, { setHero } from "../../slices/inputSlice";
import tooltipReducer from "../../slices/tooltipSlice";
import type { Item } from "../../types";
import BreakPointCalculator from "../BreakPointCalculator";

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
    const { getByText, getAllByRole } = renderWithStore(
      <BreakPointCalculator items={[]} powersByHero={{}} />,
    );
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
              '<b>[Pulsar Torpedoes]</b> explode on hit, dealing <b class="stat-ap">35</b> damage.',
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
      {
        id: "sky",
        name: "Skyline Nanites",
        cost: 5000,
        tab: "ability",
        rarity: "epic",
        attributes: [
          { type: "AP", value: "10%" },
          { type: "description", value: 'Grants <b class="stat-ap">5</b> bonus damage.' },
        ],
      },
    ];

    const { store, findByText, findAllByText } = renderWithStore(
      <BreakPointCalculator items={items} powersByHero={{ Juno: [] }} />,
    );
    await act(async () => {
      store.dispatch(setHero("Juno"));
    });

    const computeButton = await findByText("Compute breakpoints");

    await act(async () => {
      fireEvent.click(computeButton);
    });

    expect(await findByText("DMG")).toBeInTheDocument();
    const skylineMentions = await findAllByText(/Skyline Nanites/i);
    expect(skylineMentions.length).toBeGreaterThan(0);
  });
});
