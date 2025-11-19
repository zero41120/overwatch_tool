/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import undoable from "redux-undo";
import HeroPowerGrid from "../input_view/HeroPowerGrid";
import inputReducer, { setHero } from "../../slices/inputSlice";
import tooltipReducer from "../../slices/tooltipSlice";
import type { HeroPower } from "../../types";

const powersByHero: Record<string, HeroPower[]> = {
  Juno: [
    {
      hero: "Juno",
      name: "Blink Boosts",
      affectedAbility: "Glide Boost",
      description: "<b>desc</b>",
    },
    {
      hero: "Juno",
      name: "Torpedo Glide",
      description: "another",
    },
    { hero: "Juno", name: "Medicinal Missiles", description: "heal" },
    { hero: "Juno", name: "Cosmic Coolant", description: "cooldown" },
    { hero: "Juno", name: "Stellar Focus", description: "focus" },
  ],
};

const makeStore = () =>
  configureStore({
    reducer: {
      input: undoable(inputReducer),
      tooltip: tooltipReducer,
    },
  });

describe("HeroPowerGrid", () => {
  it("renders hero powers and toggles selection", () => {
    const store = makeStore();
    store.dispatch(setHero("Juno"));
    const { getByText } = render(
      <Provider store={store}>
        <HeroPowerGrid powersByHero={powersByHero} />
      </Provider>,
    );

    const firstCard = getByText("Blink Boosts");
    expect(firstCard).toBeInTheDocument();

    fireEvent.click(firstCard);
    expect(store.getState().input.present.heroPowers).toEqual(["Blink Boosts"]);

    fireEvent.click(firstCard);
    expect(store.getState().input.present.heroPowers).toHaveLength(0);
  });

  it("limits selection to four powers and allows clearing", () => {
    const store = makeStore();
    store.dispatch(setHero("Juno"));
    const { getByText } = render(
      <Provider store={store}>
        <HeroPowerGrid powersByHero={powersByHero} />
      </Provider>,
    );

    const powerButtons = powersByHero.Juno.map((power) => getByText(power.name));
    powerButtons.slice(0, 4).forEach((btn) => fireEvent.click(btn));

    expect(store.getState().input.present.heroPowers).toHaveLength(4);

    const fifth = getByText("Stellar Focus");
    fireEvent.click(fifth);
    expect(store.getState().input.present.heroPowers).toHaveLength(4);

    fireEvent.click(getByText("Clear selection"));
    expect(store.getState().input.present.heroPowers).toHaveLength(0);
  });

  it("toggles description visibility", () => {
    const store = makeStore();
    store.dispatch(setHero("Juno"));
    const { getByText, getAllByText } = render(
      <Provider store={store}>
        <HeroPowerGrid powersByHero={powersByHero} />
      </Provider>,
    );

    fireEvent.click(getAllByText("Show details")[0]);
    expect(getByText("desc", { exact: false })).toBeInTheDocument();
    fireEvent.click(getByText("Hide details"));
    expect(getAllByText("Show details").length).toBeGreaterThan(0);
  });

  it("shows empty state when hero has no powers", () => {
    const store = makeStore();
    store.dispatch(setHero("Mercy"));
    const { getByText } = render(
      <Provider store={store}>
        <HeroPowerGrid powersByHero={powersByHero} />
      </Provider>,
    );

    expect(getByText("No powers for this hero yet")).toBeInTheDocument();
  });
});
