/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import type { Item, ResultCombo } from "../../types";
import ResultsSection from "../results_view/ResultsSection";

const eqItems: Item[] = [
  {
    id: "1",
    name: "Sword",
    cost: 100,
    tab: "weapon",
    rarity: "common",
    attributes: [],
  },
];
const results: ResultCombo = {
  score: 10,
  cost: 50,
  items: [
    {
      id: "2",
      name: "Shield",
      cost: 50,
      tab: "armor",
      rarity: "rare",
      attributes: [],
    },
  ],
  breakdown: [{ type: "AP", sum: 5, contrib: 5 }],
};

const alternatives: ResultCombo[] = [{ score: 8, cost: 40, items: [], breakdown: [] }];

describe("ResultsSection", () => {
  it("renders placeholder when no results", () => {
    const { getByText } = render(
      <Provider store={store}>
        <ResultsSection eqItems={[]} eqCost={0} cash={0} builds={[]} selected={0} onSelect={() => {}} />
      </Provider>,
    );
    expect(getByText("No results yet")).toBeInTheDocument();
  });

  it("shows result details", () => {
    const { getByText } = render(
      <Provider store={store}>
        <ResultsSection
          eqItems={eqItems}
          eqCost={100}
          cash={200}
          builds={[results, ...alternatives]}
          selected={0}
          onSelect={() => {}}
        />
      </Provider>,
    );
    expect(getByText("Final Build")).toBeInTheDocument();
    expect(getByText("All Possible Builds")).toBeInTheDocument();
    expect(getByText("Cost: 40")).toBeInTheDocument();
  });

  it("adds item to avoid list on click", () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <ResultsSection eqItems={eqItems} eqCost={100} cash={200} builds={[results]} selected={0} onSelect={() => {}} />
      </Provider>,
    );
    fireEvent.click(getByLabelText("Avoid Shield"));
    const state = store.getState();
    expect(state.input.present.avoid).toContain("2");
    expect(state.input.present.avoidEnabled).toBe(true);
  });
});
