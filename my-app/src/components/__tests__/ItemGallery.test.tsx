/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import ItemGallery from "../ItemGallery";
import store from "../../store";
import type { Item } from "../../types";

const items: Item[] = [
  { name: "One", cost: 10, tab: "weapon", rarity: "common", attributes: [], iconUrl: "a.png" },
  { name: "Two", cost: 20, tab: "ability", rarity: "rare", attributes: [] },
];
const heroes = ["HeroA"];
const attrTypes = ["WP", "AP"];

describe("ItemGallery", () => {
  it("changes selected item on click", () => {
    const { getByText } = render(
      <Provider store={store}>
        <ItemGallery items={items} heroes={heroes} attrTypes={attrTypes} />
      </Provider>,
    );
    fireEvent.click(getByText("Two"));
    expect(getByText("ability")).toBeInTheDocument();
  });

  it("shows preview on hover", () => {
    const { getAllByText } = render(
      <Provider store={store}>
        <ItemGallery items={items} heroes={heroes} attrTypes={attrTypes} />
      </Provider>,
    );
    const icon = getAllByText("Two")[0];
    fireEvent.mouseOver(icon, { clientX: 20, clientY: 30 });
    const state = store.getState();
    expect(state.tooltip?.item.name).toBe("Two");
    fireEvent.mouseLeave(icon);
  });

  it("toggles edit mode", () => {
    const { getByText } = render(
      <Provider store={store}>
        <ItemGallery items={items} heroes={heroes} attrTypes={attrTypes} />
      </Provider>,
    );
    fireEvent.click(getByText("Customize"));
    expect(getByText("Add Row")).toBeInTheDocument();
  });

  it("filters and folds gallery", () => {
    const { getByText, queryByRole, getAllByRole, getByPlaceholderText } = render(
      <Provider store={store}>
        <ItemGallery items={items} heroes={heroes} attrTypes={attrTypes} />

      </Provider>,
    );
    fireEvent.click(getByText("Hide"));
    expect(queryByRole("button", { name: "Two" })).not.toBeInTheDocument();
    fireEvent.click(getByText("Show"));
    fireEvent.click(getByText("All Items"));
    const input = getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "Two" } });
    fireEvent.click(getAllByRole("menuitem")[0]);
    expect(queryByRole("button", { name: "One" })).not.toBeInTheDocument();
  });

  it("saves override to localStorage", () => {
    const { getByText } = render(
      <Provider store={store}>
        <ItemGallery items={items} heroes={heroes} attrTypes={attrTypes} />
      </Provider>,
    );
    fireEvent.click(getByText("Customize"));
    fireEvent.click(getByText("Save"));
    const stored = JSON.parse(localStorage.getItem("localOverrides") || "{}");
    expect(stored).toHaveProperty("One");
  });
});
