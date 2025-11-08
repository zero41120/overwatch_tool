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

describe("JunoTorpedoCalculator layout", () => {
  it("renders items as a 6-slot grid in results", async () => {
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
    ];

    const { store, findByText, container } = renderWithStore(
      <BreakPointCalculator items={items} />,
    );

    await act(async () => {
      store.dispatch(setHero("Juno"));
    });

    const computeButton = await findByText("Compute breakpoints");
    await act(async () => {
      fireEvent.click(computeButton);
    });

    const grids = container.querySelectorAll('.grid.grid-cols-3');
    expect(grids.length).toBeGreaterThan(0);
    const firstGrid = grids[0] as HTMLElement;
    // Expect exactly 6 slots rendered (filled or empty)
    const slots = firstGrid.querySelectorAll(':scope > div.min-h-12');
    expect(slots.length).toBe(6);
  });
});

