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
    const { getAllByText, getByText } = render(<ItemGallery items={items} />);
    const icon = getAllByText("Two")[0];
    fireEvent.mouseOver(icon);
    expect(getByText("ability")).toBeInTheDocument();
    fireEvent.mouseLeave(icon);
  });

  it("toggles edit mode", () => {
    const { getByText } = render(<ItemGallery items={items} />);
    fireEvent.click(getByText("Customize"));
    expect(getByText("Edit mode enabled")).toBeInTheDocument();
  });
});
