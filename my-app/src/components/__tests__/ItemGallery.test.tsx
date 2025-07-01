/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import ItemGallery from "../ItemGallery";
import type { Item } from "../../types";

describe("ItemGallery", () => {
  const items: Item[] = [
    { id: "1", name: "Sword", cost: 100, tab: "weapon", rarity: "common", attributes: [] },
    { id: "2", name: "Shield", cost: 50, tab: "survival", rarity: "rare", attributes: [] },
  ];

  it("shows items as cards", () => {
    const { getByText } = render(<ItemGallery items={items} />);
    expect(getByText("Sword")).toBeInTheDocument();
    expect(getByText("Shield")).toBeInTheDocument();
  });

  it("toggles attribute editor", () => {
    const { getAllByText, queryByTestId } = render(<ItemGallery items={items} />);
    const btn = getAllByText("Edit")[0];
    fireEvent.click(btn);
    expect(queryByTestId("editor")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(queryByTestId("editor")).not.toBeInTheDocument();
  });
});
