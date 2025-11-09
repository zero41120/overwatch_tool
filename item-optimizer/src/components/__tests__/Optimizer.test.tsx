/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { act, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { vi } from "vitest";
import store from "../../store";
import Optimizer from "../../Optimizer";
import { toggleUseOverrides } from "../../slices/inputSlice";

vi.mock("../../itemDataProvider", () => ({
  default: () => ({
    tabs: {
      weapon: { common: [{ name: "One", cost: 10, attributes: [], tab: "weapon", rarity: "common" }], rare: [], epic: [] },
      ability: { common: [{ name: "Two", cost: 20, attributes: [], tab: "ability", rarity: "common" }], rare: [], epic: [] },
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

describe("Optimizer", () => {
  it("renders item gallery", async () => {
    const { findByText } = render(
      <Provider store={store}>
        <Optimizer />
      </Provider>
    );
    expect(await findByText("Customize")).toBeInTheDocument();
  });

  it("loads local overrides", async () => {
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
});
