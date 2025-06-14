/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { vi } from "vitest";
import ItemCard from "../shared/ItemCard";

describe("ItemCard", () => {
  it("calls onAvoid when button clicked", () => {
    const onAvoid = vi.fn();
    const { getByLabelText } = render(
      <ItemCard
        title="Sword"
        rarity="common"
        content={[]}
        price="100"
        showAvoidButton
        onAvoid={onAvoid}
      />,
    );
    fireEvent.click(getByLabelText("Avoid Sword"));
    expect(onAvoid).toHaveBeenCalled();
  });
});
