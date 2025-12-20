/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import { Provider } from "react-redux";
import ItemGallery from "../ItemGallery";
import store from "../../store";
import type { Item } from "../../types";

const items: Item[] = [
  {
    name: "One",
    cost: 10,
    tab: "weapon",
    rarity: "common",
    attributes: [{ type: "WP", value: "5" }],
    iconUrl: "a.png",
  },
  {
    name: "Two",
    cost: 20,
    tab: "ability",
    rarity: "rare",
    attributes: [{ type: "AP", value: "5" }],
  },
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

  it("filters and folds gallery", async () => {
    const { getByText, queryByRole, getAllByRole, getByPlaceholderText, getByRole } = render(
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

    // filter by attribute
    fireEvent.click(getByRole("button", { name: "Select attribute" }));
    fireEvent.click(getAllByRole("menuitem")[0]);
    await waitFor(() => {
      const buttons = document.querySelectorAll(
        ".grid.grid-cols-3 button",
      );
      expect(buttons.length).toBe(0);
    });
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

  it("shows override indicator and restore", () => {
    localStorage.setItem("localOverrides", JSON.stringify({ One: { attributes: [] } }));
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <ItemGallery items={items} heroes={heroes} attrTypes={attrTypes} />
      </Provider>,
    );
    expect(getByLabelText("One override mark")).toBeInTheDocument();
    fireEvent.click(getByText("Restore"));
    const stored = localStorage.getItem("localOverrides");
    expect(stored).toBe("{}");
  });

  it("edits local overrides text", () => {
    localStorage.setItem("localOverrides", JSON.stringify({ One: { attributes: [] } }));
    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <ItemGallery items={items} heroes={heroes} attrTypes={attrTypes} />
      </Provider>,
    );
    fireEvent.click(getByText("View locally saved"));
    const area = getByLabelText("Local Overrides");
    fireEvent.change(area, { target: { value: "{}" } });
    fireEvent.click(getByText("Save"));
    expect(localStorage.getItem("localOverrides")).toBe("{}");
  });

  it("toggles tooltip on mobile tap and centers tooltip under the item", () => {
    const originalMatchMedia = window.matchMedia;
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query === "(pointer: coarse)",
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    const { getByText } = render(
      <Provider store={store}>
        <ItemGallery items={items} heroes={heroes} attrTypes={attrTypes} />
      </Provider>,
    );

    const secondItem = getByText("Two").closest("button")!;
    vi.spyOn(secondItem, "getBoundingClientRect").mockReturnValue({
      left: 100,
      right: 150,
      top: 200,
      bottom: 240,
      width: 50,
      height: 40,
      x: 100,
      y: 200,
      toJSON: () => ({}),
    });

    fireEvent.click(secondItem);
    expect(store.getState().tooltip?.item.name).toBe("Two");
    expect(store.getState().tooltip?.x).toBe(125);
    expect(store.getState().tooltip?.y).toBe(240);
    fireEvent.click(secondItem);
    expect(store.getState().tooltip).toBeNull();

    window.matchMedia = originalMatchMedia;
  });
});
