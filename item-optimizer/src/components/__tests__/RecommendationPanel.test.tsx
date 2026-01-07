/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { fireEvent, render, screen, within, waitFor } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import undoable from "redux-undo";
import RecommendationPanel from "../results_view/RecommendationPanel";
import type { HeroMetadata, Item } from "../../types";
import inputReducer, { setHero } from "../../slices/inputSlice";
import tooltipReducer from "../../slices/tooltipSlice";

const heroMetadata: HeroMetadata[] = [
  { name: "Ashe", slug: "ashe", role: "damage" },
  { name: "Reinhardt", slug: "reinhardt", role: "tank" },
];

const items: Item[] = [
  {
    id: "syn",
    name: "Synergy Trinket",
    cost: 0,
    tab: "weapon",
    rarity: "common",
    attributes: [],
    synergyHeroes: ["Ashe"],
  },
  {
    id: "risk",
    name: "Risky Blade",
    cost: 0,
    tab: "weapon",
    rarity: "common",
    attributes: [],
    synergyHeroes: ["Ashe"],
    beingCountered: ["Reinhardt"],
  },
];

describe("RecommendationPanel", () => {
  it("shows recommendation scores that include beingCountered penalties", async () => {
    const store = configureStore({
      reducer: {
        input: undoable(inputReducer),
        tooltip: tooltipReducer,
      },
    });
    store.dispatch(setHero("Ashe"));
    render(
      <Provider store={store}>
        <RecommendationPanel allItems={items} powersByHero={{}} heroMetadata={heroMetadata} />
      </Provider>,
    );

    const enemySection = screen.getByText("Enemy Team").parentElement;
    if (!enemySection) throw new Error("Enemy section missing");
    const enemyPickers = within(enemySection).getAllByText("Select hero");
    fireEvent.click(enemyPickers[0]);
    fireEvent.click(await screen.findByText("Reinhardt"));

    await waitFor(() => {
      expect(screen.getAllByText("Risky Blade").length).toBeGreaterThan(0);
    });

    const cards = screen.getAllByTestId("recommendation-card");
    const synergyCard = cards.find((card) => within(card).queryAllByText("Synergy Trinket").length > 0);
    const riskyCard = cards.find((card) => within(card).queryAllByText("Risky Blade").length > 0);

    if (!synergyCard || !riskyCard) throw new Error("Missing recommendation cards");

    const synergyScore = within(synergyCard).getByTestId("recommendation-score");
    const riskyScore = within(riskyCard).getByTestId("recommendation-score");

    expect(synergyScore).toHaveTextContent("+1");
    expect(riskyScore).toHaveTextContent("0");
  });
});
