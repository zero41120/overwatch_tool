/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { vi } from "vitest";
import Dropdown from "../shared/Dropdown";

describe("Dropdown", () => {
  const options = [
    { value: "1", label: "One" },
    { value: "2", label: "Two" },
  ];

  it("calls onChange and closes when option selected", () => {
    const onChange = vi.fn();
    const { getByText, queryByRole } = render(
      <Dropdown label="Test" options={options} value="" onChange={onChange} />,
    );
    fireEvent.click(getByText("Select an option"));
    fireEvent.click(getByText("One"));
    expect(onChange).toHaveBeenCalledWith("1");
    expect(queryByRole("menu")).not.toBeInTheDocument();
  });

  it("shows message when options empty", () => {
    const { getByText } = render(
      <Dropdown label="Empty" options={[]} value="" onChange={() => {}} />,
    );
    fireEvent.click(getByText("Select an option"));
    expect(getByText("No options available")).toBeInTheDocument();
  });
});
