/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { act, render, waitFor, within } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import undoable from "redux-undo";
import { vi } from "vitest";
import Optimizer from "../../Optimizer";
import { setWeightType, toggleUseOverrides } from "../../slices/inputSlice";
import inputReducer from "../../slices/inputSlice";
import tooltipReducer from "../../slices/tooltipSlice";

vi.mock("../../itemDataProvider", () => ({
  default: () => ({
    tabs: {
      weapon: {
        common: [
          {
            name: "One",
            cost: 10,
            attributes: [{ type: "AP", value: "5" }],
            tab: "weapon",
            rarity: "common",
          },
        ],
        rare: [],
        epic: [],
      },
      ability: {
        common: [
          {
            name: "Two",
            cost: 20,
            attributes: [{ type: "AP", value: "3" }],
            tab: "ability",
            rarity: "common",
          },
        ],
        rare: [],
        epic: [],
      },
      survival: { common: [], rare: [], epic: [] },
      powers: {}
    }
  }),
  readOverrideData: () => ({
    One: {
      editor_overrides: [
        {
          applyTo: ["Ashe"],
          attributes: [{ type: "AP", value: "5" }]
        }
      ]
    }
  })
}));

const createTestStore = () =>
  configureStore({
    reducer: {
      input: undoable(inputReducer),
      tooltip: tooltipReducer,
    },
  });

describe("Optimizer", () => {
  it("renders item gallery", async () => {
    const store = createTestStore();
    const { findByText } = render(
      <Provider store={store}>
        <Optimizer />
      </Provider>
    );
    expect(await findByText("Customize")).toBeInTheDocument();
  });

  it("loads local overrides", async () => {
    const store = createTestStore();
    localStorage.setItem(
      "localOverrides",
      JSON.stringify({ One: { attributes: [{ type: "AP", value: "5" }] } }),
    );
    const { findByText } = render(
      <Provider store={store}>
        <Optimizer />
      </Provider>,
    );
    expect(await findByText("override")).toBeInTheDocument();
  });

  it("clears memoized caches when overrides toggle", async () => {
    const store = createTestStore();
    const clearSpy = vi.spyOn(Map.prototype, "clear");
    render(
      <Provider store={store}>
        <Optimizer />
      </Provider>,
    );
    const initialCalls = clearSpy.mock.calls.length;
    await act(async () => {
      store.dispatch(toggleUseOverrides());
    });
    await waitFor(() => {
      expect(clearSpy.mock.calls.length).toBeGreaterThanOrEqual(initialCalls + 3);
    });
    await act(async () => {
      store.dispatch(toggleUseOverrides());
    });
    clearSpy.mockRestore();
  });

  it("recomputes when avoid list changes after calculate", async () => {
    const store = createTestStore();
    const { findByText, getByText, getByRole } = render(
      <Provider store={store}>
        <Optimizer />
      </Provider>,
    );
    await act(async () => {
      store.dispatch(setWeightType({ index: 0, type: "AP" }));
    });
    await findByText(/locally saved/i);
    const computeButton = await findByText("Cheapest Best Build");
    await act(async () => {
      computeButton.click();
    });
    await findByText("Items Overview");
    let overview = getByText("Items Overview").parentElement;
    if (!overview) {
      throw new Error("Missing items overview");
    }
    await act(async () => {
      within(overview).getByLabelText("Avoid One").click();
    });
    overview = getByText("Items Overview").parentElement;
    if (!overview) {
      throw new Error("Missing items overview");
    }
    await act(async () => {
      within(overview).getByLabelText("Avoid Two").click();
    });
    await waitFor(() => {
      expect(getByRole("alert")).toHaveTextContent("No items available that match your criteria");
    });
  });
});
