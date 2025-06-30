/* @vitest-environment jsdom */
import { loadOverrides, saveOverrides, STORAGE_KEY } from "../localOverrides";

beforeEach(() => localStorage.clear());

test("saveOverrides stores data", () => {
  saveOverrides({ A: { cost: 1 } });
  expect(localStorage.getItem(STORAGE_KEY)).toBe(
    JSON.stringify({ A: { cost: 1 } })
  );
});

test("loadOverrides retrieves data", () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ B: { cost: 2 } }));
  expect(loadOverrides()).toEqual({ B: { cost: 2 } });
});
