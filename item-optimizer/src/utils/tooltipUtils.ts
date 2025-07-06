// Utility for tooltip positioning
export interface TooltipPosition {
    x: number;
    y: number;
}

export interface TooltipStyleOptions {
    width?: number;
    height?: number;
    offset?: number;
}

export function getTooltipStyle(
    x: number,
    y: number,
    options: TooltipStyleOptions = {}
): React.CSSProperties {
    const winW = window.innerWidth;
    const winH = window.innerHeight;
    const TOOLTIP_WIDTH = options.width ?? 320;
    const TOOLTIP_HEIGHT = options.height ?? 180;
    const OFFSET = options.offset ?? 12;
    let left = x + OFFSET;
    let top = y + OFFSET;
    if (left + TOOLTIP_WIDTH > winW) {
        left = x - TOOLTIP_WIDTH - OFFSET;
    }
    if (top + TOOLTIP_HEIGHT > winH) {
        top = y - TOOLTIP_HEIGHT - OFFSET;
    }
    return {
        left,
        top,
        minWidth: "220px",
        maxWidth: `${TOOLTIP_WIDTH}px`,
        position: "fixed" as const,
        zIndex: 20,
        pointerEvents: "none",
        overflow: "hidden",
    };
}
