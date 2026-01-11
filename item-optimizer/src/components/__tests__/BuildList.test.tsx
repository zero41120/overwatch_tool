/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { vi } from "vitest";
import BuildList from "../results_view/BuildList";
import store from "../../store";
import type { Item, ResultCombo } from "../../types";

const eqItems: Item[] = [];
const builds: ResultCombo[] = [
  { cost: 10, score: 0, items: [], metricValues: {}, breakdown: [] },
  { cost: 20, score: 0, items: [], metricValues: {}, breakdown: [] },
];

describe("BuildList", () => {
  it("renders builds and handles selection", () => {
    const onSelect = vi.fn();
    const { getByLabelText } = render(
      <Provider store={store}>
        <BuildList eqItems={eqItems} builds={builds} selected={0} onSelect={onSelect} />
      </Provider>,
    );
    fireEvent.click(getByLabelText("Cost: 20"));
    expect(onSelect).toHaveBeenCalledWith(1);
  });
});
