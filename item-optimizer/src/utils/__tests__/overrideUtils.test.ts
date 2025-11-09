import { describe, expect, it } from "vitest";
import type { Attribute } from "../../types";
import { normalizeOverride, resolveOverrideAttributes } from "../overrideUtils";

const sampleAttr: Attribute = { type: "WP", value: "5%" };

describe("overrideUtils", () => {
  it("normalizes legacy hero keys", () => {
    const normalized = normalizeOverride({
      name: "Test",
      attributes: [sampleAttr],
      Ashe: [sampleAttr],
    });
    expect(normalized.editor_overrides?.[0]).toEqual({ applyTo: ["Ashe"], attributes: [sampleAttr] });
    expect((normalized as unknown as Record<string, unknown>).Ashe).toBeUndefined();
  });

  it("resolves hero-specific overrides before defaults", () => {
    const override = normalizeOverride({
      attributes: [{ type: "AP", value: "1%" }],
      editor_overrides: [
        { applyTo: ["Mercy"], attributes: [{ type: "AP", value: "5%" }] },
        { applyTo: ["Moira"], attributes: [{ type: "AP", value: "3%" }] },
        { attributes: [{ type: "AP", value: "4%" }] },
      ],
    });
    expect(resolveOverrideAttributes(override, "Mercy")).toEqual([{ type: "AP", value: "5%" }]);
    expect(resolveOverrideAttributes(override, "Moira")).toEqual([{ type: "AP", value: "3%" }]);
    expect(resolveOverrideAttributes(override, "Ana")).toEqual([{ type: "AP", value: "4%" }]);
    expect(resolveOverrideAttributes(override, undefined)).toEqual([{ type: "AP", value: "1%" }]);
  });
});
