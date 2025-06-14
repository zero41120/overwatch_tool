/* @vitest-environment jsdom */
import { vi } from "vitest";
import { createRoot } from "react-dom/client";

vi.mock("react-dom/client", () => ({
  createRoot: vi.fn(() => ({ render: vi.fn() })),
}));

describe("main", () => {
  it("calls createRoot", async () => {
    document.body.innerHTML = '<div id="root"></div>';
    await import("../../main");
    expect(createRoot).toHaveBeenCalled();
  });
});
