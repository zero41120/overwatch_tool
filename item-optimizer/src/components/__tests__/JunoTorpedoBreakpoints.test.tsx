/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";

import JunoTorpedoBreakpoints from "../JunoTorpedoBreakpoints";
import type { Item } from "../../types";

const items: Item[] = [
  {
    id: "mark",
    name: "Mark of the Kitsune",
    cost: 11000,
    tab: "ability",
    rarity: "epic",
    attributes: [
      { type: "AP", value: "10%" },
      {
        type: "description",
        value:
          "When you use an ability, your next instance of Weapon Damage or Healing deals <b class=\"stat-ap\">25</b> bonus damage or healing.",
      },
    ],
  },
  {
    id: "champ",
    name: "Champion's Kit",
    cost: 14000,
    tab: "ability",
    rarity: "epic",
    attributes: [{ type: "AP", value: "35%" }],
  },
];

describe("JunoTorpedoBreakpoints", () => {
  it("renders breakpoints using enabled items and responds to toggles", async () => {
    render(<JunoTorpedoBreakpoints items={items} />);

    expect(await screen.findByText("Juno Torpedo Breakpoints")).toBeInTheDocument();
    // The combined build should appear when both items are enabled.
    expect(await screen.findByText("159.5")).toBeInTheDocument();

    const checkboxes = screen.getAllByRole("checkbox");
    // Index 0 is the burn toggle, 1 is Mark, 2 is Champion's Kit.
    fireEvent.click(checkboxes[2]);

    const table = screen.getByRole("table");
    await waitFor(() => {
      expect(within(table).queryByText("Champion's Kit")).not.toBeInTheDocument();
    });

    const rows = within(table).getAllByRole("row");
    const markRow = rows.find((row) => within(row).queryByText("Mark of the Kitsune"));
    expect(markRow).toBeDefined();
    expect(within(markRow!).getByText("121.0")).toBeInTheDocument();
  });
});
