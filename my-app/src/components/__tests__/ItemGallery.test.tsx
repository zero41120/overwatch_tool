/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import ItemGallery from "../ItemGallery";
import type { Item } from "../../types";
import { STORAGE_KEY } from "../../utils/localOverrides";

beforeEach(() => localStorage.clear());

const items: Item[] = [
  { id: "1", name: "Sword", cost: 100, tab: "weapon", rarity: "common", attributes: [] },
];

test("edits item and saves to storage", () => {
  const { getAllByRole, getByPlaceholderText, getByDisplayValue } = render(
    <ItemGallery items={items} />,
  );
  fireEvent.click(getAllByRole("button")[1]);
  const search = getByPlaceholderText("Search...");
  fireEvent.change(search, { target: { value: "Sword" } });
  fireEvent.keyDown(search, { key: "Enter" });
  const input = getByDisplayValue("100");
  fireEvent.change(input, { target: { value: "150" } });
  const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)!);
  expect(stored["1"].cost).toBe(150);
});
