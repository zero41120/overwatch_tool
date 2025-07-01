/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import ItemGallery from "../ItemGallery";
import type { Item } from "../../types";

const items: Item[] = [
  { name: "One", cost: 10, tab: "weapon", rarity: "common", attributes: [], iconUrl: "a.png" },
  { name: "Two", cost: 20, tab: "ability", rarity: "rare", attributes: [] },
];

describe("ItemGallery", () => {
  it("changes selected item on click", () => {
    const { getByText } = render(<ItemGallery items={items} />);
    fireEvent.click(getByText("Two"));
    expect(getByText("ability")).toBeInTheDocument();
  });

  it("shows preview on hover", () => {
    const { getAllByText } = render(<ItemGallery items={items} />);
    const icon = getAllByText("Two")[0];
    fireEvent.mouseOver(icon, { clientX: 20, clientY: 30 });
    expect(getAllByText("ability").length).toBeGreaterThan(0);
    fireEvent.mouseLeave(icon);
  });

  it("toggles edit mode", () => {
    const { getByText } = render(<ItemGallery items={items} />);
    fireEvent.click(getByText("Customize"));
    expect(getByText("Edit mode enabled")).toBeInTheDocument();
  });

  it("filters and folds gallery", () => {
    const { getByText, queryByRole, getAllByRole, getByPlaceholderText, getAllByText } = render(
      <ItemGallery items={items} />,
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
});
