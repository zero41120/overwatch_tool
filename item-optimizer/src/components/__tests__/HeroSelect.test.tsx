/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import undoable from "redux-undo";
import HeroSelect from "../input_view/HeroSelect";
import inputReducer, { setHero } from "../../slices/inputSlice";
import tooltipReducer from "../../slices/tooltipSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      input: undoable(inputReducer),
      tooltip: tooltipReducer,
    },
  });

describe("HeroSelect", () => {
  it("renders hero picker and opens grid overlay", () => {
    const store = makeStore();
    store.dispatch(setHero("Juno"));
    const heroIcons = { Juno: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/9e/Juno_Stadium.png" };
    const { container, getByRole, getByText } = render(
      <Provider store={store}>
        <HeroSelect heroes={["Juno"]} heroIcons={heroIcons} />
      </Provider>,
    );

    expect(container.querySelector(`img[src="${heroIcons.Juno}"]`)).toBeInTheDocument();
    const trigger = getByRole("button", { name: /Juno/i });
    fireEvent.click(trigger);
    expect(getByText("Clear hero")).toBeInTheDocument();
  });
});
