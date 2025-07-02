/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { vi } from "vitest";
import SearchableDropdown from "../shared/SearchableDropdown";

describe("SearchableDropdown", () => {
  const options = [
    { value: "1", label: "One" },
    { value: "2", label: "Two" },
  ];

  it("renders icon when provided", () => {
    const opts = [{ value: "1", label: "One", iconUrl: "icon.png" }];
    const { getAllByRole, getByRole } = render(
      <SearchableDropdown label="Icon" options={opts} value="" onChange={() => {}} />,
    );
    fireEvent.click(getAllByRole("button")[0]);
    expect(getByRole("presentation")).toHaveAttribute("src", "icon.png");
  });

  it("focuses search input when opened", () => {
    const { getAllByRole, getByPlaceholderText } = render(
      <SearchableDropdown label="Test" options={options} value="" onChange={() => {}} />,
    );
    fireEvent.click(getAllByRole("button")[0]);
    const input = getByPlaceholderText("Search...");
    expect(input).toHaveFocus();
  });

  it("accepts single result with enter key", () => {
    const handleChange = vi.fn();
    const { getAllByRole, getByPlaceholderText } = render(
      <SearchableDropdown label="Test" options={options} value="" onChange={handleChange} />,
    );
    fireEvent.click(getAllByRole("button")[0]);
    const input = getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "One" } });
    fireEvent.keyDown(input, { key: "Enter" });
    expect(handleChange).toHaveBeenCalledWith("1");
  });
});
