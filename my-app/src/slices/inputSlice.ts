import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { WeightRow, MinAttrGroup } from "../types";

export interface InputState {
  hero: string;
  cash: number;
  equipped: (string | "")[];
  toBuy: number;
  avoid: string[];
  avoidEnabled: boolean;
  weights: WeightRow[];
  error: string;
  minValueEnabled: boolean;
  minAttrGroups: MinAttrGroup[];
}

const initialState: InputState = {
  hero: "Ashe",
  cash: 11000,
  equipped: Array(2).fill(""),
  toBuy: 6,
  avoid: [],
  avoidEnabled: false,
  weights: [{ type: "", weight: 1 }],
  error: "",
  minValueEnabled: false,
  minAttrGroups: [],
};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setHero(state, action: PayloadAction<string>) {
      state.hero = action.payload;
    },
    setCash(state, action: PayloadAction<number>) {
      state.cash = action.payload;
    },
    setEquipped(state, action: PayloadAction<{ index: number; id: string }>) {
      state.equipped[action.payload.index] = action.payload.id;
    },
    addEquippedSlot(state) {
      if (state.equipped.length < 6) {
        state.equipped.push("");
      }
    },
    removeEquippedSlot(state, action: PayloadAction<number>) {
      if (state.equipped.length > 2) {
        state.equipped.splice(action.payload, 1);
      }
    },
    setToBuy(state, action: PayloadAction<number>) {
      state.toBuy = action.payload;
    },
    addAvoid(state, action: PayloadAction<string>) {
      if (!state.avoid.includes(action.payload)) {
        state.avoid.push(action.payload);
      }
    },
    removeAvoid(state, action: PayloadAction<string>) {
      state.avoid = state.avoid.filter((id) => id !== action.payload);
    },
    toggleAvoidEnabled(state) {
      state.avoidEnabled = !state.avoidEnabled;
    },
    setWeightType(
      state,
      action: PayloadAction<{ index: number; type: string }>,
    ) {
      state.weights[action.payload.index].type = action.payload.type;
    },
    setWeightValue(
      state,
      action: PayloadAction<{ index: number; value: number }>,
    ) {
      state.weights[action.payload.index].weight = action.payload.value;
    },
    addWeightRow(state, action: PayloadAction<string>) {
      state.weights.push({ type: action.payload, weight: 1 });
    },
    removeWeightRow(state, action: PayloadAction<number>) {
      state.weights.splice(action.payload, 1);
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    toggleMinValueEnabled(state) {
      state.minValueEnabled = !state.minValueEnabled;
      if (state.minValueEnabled && state.minAttrGroups.length === 0) {
        state.minAttrGroups.push({
          attrs: ["Health", "Armor", "Shield"],
          value: 50,
        });
      }
    },
    addMinGroup(state) {
      state.minAttrGroups.push({ attrs: [], value: 0 });
    },
    removeMinGroup(state, action: PayloadAction<number>) {
      state.minAttrGroups.splice(action.payload, 1);
    },
    setMinGroupValue(
      state,
      action: PayloadAction<{ index: number; value: number }>,
    ) {
      state.minAttrGroups[action.payload.index].value = action.payload.value;
    },
    addAttrToGroup(
      state,
      action: PayloadAction<{ index: number; attr: string }>,
    ) {
      const group = state.minAttrGroups[action.payload.index];
      if (!group.attrs.includes(action.payload.attr)) {
        group.attrs.push(action.payload.attr);
      }
    },
    removeAttrFromGroup(
      state,
      action: PayloadAction<{ index: number; attr: string }>,
    ) {
      const group = state.minAttrGroups[action.payload.index];
      group.attrs = group.attrs.filter((a) => a !== action.payload.attr);
    },
  },
});

export const {
  setHero,
  setCash,
  setEquipped,
  setToBuy,
  addAvoid,
  removeAvoid,
  toggleAvoidEnabled,
  setWeightType,
  setWeightValue,
  addWeightRow,
  removeWeightRow,
  setError,
  toggleMinValueEnabled,
  addMinGroup,
  removeMinGroup,
  setMinGroupValue,
  addAttrToGroup,
  removeAttrFromGroup,
  addEquippedSlot,
  removeEquippedSlot,
} = inputSlice.actions;

export default inputSlice.reducer;
