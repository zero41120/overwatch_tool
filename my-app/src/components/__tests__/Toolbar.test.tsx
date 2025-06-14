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
});
