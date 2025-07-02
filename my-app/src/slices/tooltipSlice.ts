import { createAction, createReducer } from "@reduxjs/toolkit";
import type { Item } from "../types";

export interface TooltipState {
  item: Item;
  x: number;
  y: number;
}

export const setTooltip = createAction<TooltipState>("tooltip/set");
export const clearTooltip = createAction("tooltip/clear");

const tooltipReducer = createReducer<TooltipState | null>(null, (builder) => {
  builder
    .addCase(setTooltip, (_, action) => action.payload)
    .addCase(clearTooltip, () => null);
});

export default tooltipReducer;
