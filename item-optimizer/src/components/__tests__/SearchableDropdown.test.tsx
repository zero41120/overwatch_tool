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

  it("focuses search input when opened", () => {
    const { getAllByRole, getByPlaceholderText } = render(
      <SearchableDropdown
        label="Test"
        options={options}
        value=""
        onChange={() => { }}
      />,
    );
    fireEvent.click(getAllByRole("button")[0]);
    const input = getByPlaceholderText("Search...");
    expect(input).toHaveFocus();
  });

  it("accepts single result with enter key", () => {
    const handleChange = vi.fn();
    const { getAllByRole, getByPlaceholderText } = render(
      <SearchableDropdown
        label="Test"
        options={options}
        value=""
        onChange={handleChange}
      />,
    );
    fireEvent.click(getAllByRole("button")[0]);
    const input = getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "One" } });
    fireEvent.keyDown(input, { key: "Enter" });
    expect(handleChange).toHaveBeenCalledWith("1");
  });

  it("shows an icon when provided", () => {
    const opts = [{ value: "1", label: "One", iconUrl: "icon.png" }];
    const { getAllByRole } = render(
      <SearchableDropdown label="Test" options={opts} value="" onChange={() => { }} />,
    );
    fireEvent.click(getAllByRole("button")[0]);
    expect(getAllByRole("presentation")[0]).toHaveAttribute("src", "icon.png");
  });

  it("filters using searchText when provided", () => {
    const opts = [
      { value: "1", label: "Alpha Beta", searchText: "alpha" },
      { value: "2", label: "Gamma" },
    ];
    const { getAllByRole, getByPlaceholderText, queryByText } = render(
      <SearchableDropdown label="Test" options={opts} value="" onChange={() => { }} />,
    );
    fireEvent.click(getAllByRole("button")[0]);
    const input = getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "Beta" } });
    expect(queryByText("Alpha Beta")).not.toBeInTheDocument();
  });
});
