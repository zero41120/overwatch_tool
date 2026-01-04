/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { vi } from "vitest";
import store from "../../store";
import type { Item } from "../../types";
import { ALL_HEROES, NO_HERO } from "../../types";
import InputSection from "../input_view/InputSection";

const heroes = ["Tracer", "Mercy"];
const heroIcons: Record<string, string> = {};
const attrTypes = ["AP", "WP"];
const attrCounts = { AP: 2, WP: 1 };
const items: Item[] = [];

describe("InputSection", () => {
  it("calls onSubmit when form is valid", () => {
    const onSubmit = vi.fn();
    const validate = vi.fn(() => true);
    const { container } = render(
      <Provider store={store}>
        <InputSection
          heroes={heroes}
          heroIcons={heroIcons}
          attrTypes={attrTypes}
          attrCounts={attrCounts}
          filteredItems={items}
          onSubmit={onSubmit}
          validate={validate}
        />
      </Provider>,
    );
    fireEvent.submit(container.querySelector("form")!);
    expect(validate).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledWith("cheapest");
  });

  it("does not submit when validate fails", () => {
    const onSubmit = vi.fn();
    const validate = vi.fn(() => false);
    const { container } = render(
      <Provider store={store}>
        <InputSection
          heroes={heroes}
          heroIcons={heroIcons}
          attrTypes={attrTypes}
          attrCounts={attrCounts}
          filteredItems={items}
          onSubmit={onSubmit}
          validate={validate}
        />
      </Provider>,
    );
    fireEvent.submit(container.querySelector("form")!);
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("passes true when clicking premium button", () => {
    const onSubmit = vi.fn();
    const { getByText } = render(
      <Provider store={store}>
        <InputSection
          heroes={heroes}
          heroIcons={heroIcons}
          attrTypes={attrTypes}
          attrCounts={attrCounts}
          filteredItems={items}
          onSubmit={onSubmit}
          validate={() => true}
        />
      </Provider>,
    );
    fireEvent.click(getByText("Premium Best Build"));
    expect(onSubmit).toHaveBeenCalledWith("premium");
  });

  it("handles incremental button", () => {
    const onSubmit = vi.fn();
    const { getByText } = render(
      <Provider store={store}>
        <InputSection
          heroes={heroes}
          heroIcons={heroIcons}
          attrTypes={attrTypes}
          attrCounts={attrCounts}
          filteredItems={items}
          onSubmit={onSubmit}
          validate={() => true}
        />
      </Provider>,
    );
    fireEvent.click(getByText("Incremental Builds"));
    expect(onSubmit).toHaveBeenCalledWith("incremental");
  });

  it("shows special hero options", () => {
    const { getByRole, getByText } = render(
      <Provider store={store}>
        <InputSection
          heroes={heroes}
          heroIcons={heroIcons}
          attrTypes={attrTypes}
          attrCounts={attrCounts}
          filteredItems={items}
          onSubmit={() => {}}
          validate={() => true}
        />
      </Provider>,
    );
    fireEvent.click(getByRole("button", { name: /Hero|Ashe/i }));
    expect(getByText(NO_HERO)).toBeInTheDocument();
    expect(getByText(ALL_HEROES)).toBeInTheDocument();
  });
});
