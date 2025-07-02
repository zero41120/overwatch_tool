/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { vi } from "vitest";
import store from "../../store";
import Optimizer from "../../Optimizer";

vi.mock("../../data.json?raw", () => ({
  default: JSON.stringify({
    tabs: {
      weapon: { common: [{ name: "One", cost: 10, attributes: [] }], rare: [], epic: [] },
      ability: { common: [{ name: "Two", cost: 20, attributes: [] }], rare: [], epic: [] },
      survival: { common: [], rare: [], epic: [] },
      powers: {}
    }
  })
}));

vi.mock("../../overrides.json?raw", () => ({ default: JSON.stringify({}) }));

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
});
