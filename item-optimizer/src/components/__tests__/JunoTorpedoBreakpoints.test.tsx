/* @vitest-environment jsdom */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import JunoTorpedoBreakpoints from "../JunoTorpedoBreakpoints";

const items = [
  {
    id: "a",
    name: "AP Module",
    cost: 1000,
    tab: "ability" as const,
    rarity: "common" as const,
    attributes: [{ type: "AP", value: "10%" }],
  },
  {
    id: "b",
    name: "Pulsar Destroyers",
    cost: 2000,
    tab: "ability" as const,
    rarity: "common" as const,
    attributes: [
      {
        type: "description",
        value: "<b>[Pulsar Torpedoes]</b> explode on hit, dealing <b class=\"stat-ap\">20</b> damage.",
      },
    ],
  },
];

describe("JunoTorpedoBreakpoints", () => {
  it("renders a breakpoint table for enabled items", async () => {
    render(<JunoTorpedoBreakpoints items={items} />);
    expect((await screen.findAllByText(/Pulsar Destroyers/)).length).toBeGreaterThan(0);
    expect(await screen.findByText(/Pulsar Destroyers, AP Module/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Allow burn multiplier/)).toBeChecked();
  });
});
