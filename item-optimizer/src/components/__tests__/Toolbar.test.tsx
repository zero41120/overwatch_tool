/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { vi } from "vitest";
import Toolbar from "../Toolbar";
import store from "../../store";
import { setCash } from "../../slices/inputSlice";
import { ActionCreators } from "redux-undo";

describe("Toolbar", () => {
  it("dispatches undo and redo actions", () => {
    store.dispatch(setCash(9000));
    const spy = vi.spyOn(store, "dispatch");
    const { getByText } = render(
      <Provider store={store}>
        <Toolbar />
      </Provider>,
    );
    fireEvent.click(getByText("Undo"));
    expect(spy).toHaveBeenCalledWith(ActionCreators.undo());
    fireEvent.click(getByText("Redo"));
    expect(spy).toHaveBeenCalledWith(ActionCreators.redo());
    spy.mockRestore();
  });

  it("imports state from JSON", () => {
    const { getByText, getByLabelText, getAllByText } = render(
      <Provider store={store}>
        <Toolbar />
      </Provider>,
    );
    fireEvent.click(getByText("Import"));
    const confirm = getAllByText("Import")[1];
    expect(confirm).toBeDisabled();
    fireEvent.change(getByLabelText("Import JSON"), {
      target: { value: JSON.stringify({ ...store.getState().input.present, hero: "Pharah" }) },
    });
    expect(confirm).not.toBeDisabled();
    fireEvent.click(confirm);
    expect(store.getState().input.present.hero).toBe("Pharah");
  });
});
