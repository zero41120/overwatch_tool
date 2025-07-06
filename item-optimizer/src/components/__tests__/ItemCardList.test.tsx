/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { vi } from "vitest";
import ItemCardList from "../shared/ItemCardList";
import type { Item } from "../../types";

const items: Item[] = [
  { id: "1", name: "B", cost: 20, tab: "weapon", rarity: "common", attributes: [] },
  { id: "2", name: "A", cost: 10, tab: "weapon", rarity: "common", attributes: [] },
];

describe("ItemCardList", () => {
  it("sorts items and calls onAvoid", () => {
    const onAvoid = vi.fn();
    const { getByLabelText, container } = render(<ItemCardList items={items} onAvoid={onAvoid} />);
    const firstCard = container.querySelector("li:nth-child(1)");
    expect(firstCard?.textContent).toContain("A");
    fireEvent.click(getByLabelText("Avoid A"));
    expect(onAvoid).toHaveBeenCalledWith(items[1]);
  });
});
