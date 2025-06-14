/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import BreakPointCalculator from "../BreakPointCalculator";

describe("BreakPointCalculator", () => {
  it("shows results after calculation", () => {
    const { getByText, getAllByRole } = render(<BreakPointCalculator />);
    fireEvent.click(getByText("Calculate"));
    // there are 21 rows from 100 to 200 step 5
    const rows = getAllByRole("row");
    // first row is header
    expect(rows.length).toBeGreaterThan(1);
  });
});
