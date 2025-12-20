/* @vitest-environment jsdom */
import { getTooltipStyle } from "../tooltipUtils";

describe("getTooltipStyle", () => {
    const originalWidth = Object.getOwnPropertyDescriptor(window, "innerWidth");
    const originalHeight = Object.getOwnPropertyDescriptor(window, "innerHeight");

    afterEach(() => {
        if (originalWidth?.get) {
            Object.defineProperty(window, "innerWidth", originalWidth);
        }
        if (originalHeight?.get) {
            Object.defineProperty(window, "innerHeight", originalHeight);
        }
    });

    it("keeps tooltip within viewport when space is limited", () => {
        Object.defineProperty(window, "innerWidth", { value: 280, configurable: true });
        Object.defineProperty(window, "innerHeight", { value: 200, configurable: true });

        const style = getTooltipStyle(10, 10, { width: 260, height: 180, offset: 12 });
        expect(style.left).toBe(12);
        expect(style.top).toBe(12);
    });

    it("flips position and clamps to max viewport space", () => {
        Object.defineProperty(window, "innerWidth", { value: 360, configurable: true });
        Object.defineProperty(window, "innerHeight", { value: 300, configurable: true });

        const style = getTooltipStyle(350, 280, { width: 200, height: 180, offset: 12 });
        expect(style.left).toBeLessThanOrEqual(148);
        expect(style.top).toBeLessThanOrEqual(108);
    });
});
