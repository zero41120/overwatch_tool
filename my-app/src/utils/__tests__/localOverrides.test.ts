/* @vitest-environment jsdom */
import { loadLocalOverrides, saveLocalOverride, deleteLocalOverride } from "../localOverrides";
import type { Attribute } from "../../types";

describe("localOverrides utils", () => {
  it("saves and deletes overrides", () => {
    const attrs: Attribute[] = [{ type: "WP", value: "5" }];
    saveLocalOverride("One", undefined, attrs);
    expect(loadLocalOverrides()).toHaveProperty("One");
    deleteLocalOverride("One");
    expect(loadLocalOverrides()).not.toHaveProperty("One");
  });
});
