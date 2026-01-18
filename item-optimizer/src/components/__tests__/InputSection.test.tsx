/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { vi } from "vitest";
import store from "../../store";
import type { Item } from "../../types";
import { ALL_HEROES, NO_HERO } from "../../types";
import type { MetricOutputDescriptor } from "../../metrics/core/metricRegistry";
import { metricOutputKey } from "../../metrics/core/metricRegistry";
import InputSection from "../input_view/InputSection";

const heroes = ["Tracer", "Mercy"];
const heroIcons: Record<string, string> = {};
const attrTypes = ["AP", "WP"];
const metricOutputs: MetricOutputDescriptor[] = [
  {
    metricId: "demo",
    metricLabel: "Demo",
    outputKey: metricOutputKey("demo", "score"),
    displayLabel: "Demo: Score",
    id: "score",
    label: "Score",
    unit: "raw",
  },
];
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
          metricOutputs={metricOutputs}
          filteredItems={items}
          onSubmit={onSubmit}
          validate={validate}
          isCalculating={false}
          progressPercent={null}
          progressLabel={null}
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
          metricOutputs={metricOutputs}
          filteredItems={items}
          onSubmit={onSubmit}
          validate={validate}
          isCalculating={false}
          progressPercent={null}
          progressLabel={null}
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
          metricOutputs={metricOutputs}
          filteredItems={items}
          onSubmit={onSubmit}
          validate={() => true}
          isCalculating={false}
          progressPercent={null}
          progressLabel={null}
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
          metricOutputs={metricOutputs}
          filteredItems={items}
          onSubmit={onSubmit}
          validate={() => true}
          isCalculating={false}
          progressPercent={null}
          progressLabel={null}
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
          metricOutputs={metricOutputs}
          filteredItems={items}
          onSubmit={() => {}}
          validate={() => true}
          isCalculating={false}
          progressPercent={null}
          progressLabel={null}
        />
      </Provider>,
    );
    fireEvent.click(getByRole("button", { name: /Hero|Ashe/i }));
    expect(getByText(NO_HERO)).toBeInTheDocument();
    expect(getByText(ALL_HEROES)).toBeInTheDocument();
  });

  it("renders progress percentage while calculating", () => {
    const { getByText } = render(
      <Provider store={store}>
        <InputSection
          heroes={heroes}
          heroIcons={heroIcons}
          attrTypes={attrTypes}
          metricOutputs={metricOutputs}
          filteredItems={items}
          onSubmit={() => {}}
          validate={() => true}
          isCalculating={true}
          progressPercent={42}
          progressLabel={"7 / 16"}
        />
      </Provider>,
    );
    expect(getByText(/42%/i)).toBeInTheDocument();
    expect(getByText(/7 \/ 16/i)).toBeInTheDocument();
  });
});
