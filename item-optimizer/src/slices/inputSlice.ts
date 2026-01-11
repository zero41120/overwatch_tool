import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { MetricInputValue } from "../metrics/ComputedMetric";
import type { MinAttrGroup, WeightRow } from "../types";

export interface InputState {
  hero: string;
  heroPowers: string[];
  cash: number;
  equipped: (string | "")[];
  equippedEnabled: boolean;
  toBuy: number;
  avoid: string[];
  avoidEnabled: boolean;
  weights: WeightRow[];
  error: string;
  minValueEnabled: boolean;
  minAttrGroups: MinAttrGroup[];
  useOverrides: boolean;
  overrideVersion: number;
  metricInputs: Record<string, Record<string, MetricInputValue>>;
}

const initialState: InputState = {
  hero: "Juno",
  heroPowers: [],
  cash: 11000,
  equipped: Array(2).fill(""),
  equippedEnabled: false,
  toBuy: 6,
  avoid: [],
  avoidEnabled: false,
  weights: [{ type: "", weight: 1 }],
  error: "",
  minValueEnabled: false,
  minAttrGroups: [],
  useOverrides: true,
  overrideVersion: 0,
  metricInputs: {},
};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setHero(state, action: PayloadAction<string>) {
      const nextHero = action.payload;
      state.hero = nextHero;
      state.heroPowers = [];
    },
    toggleHeroPower(state, action: PayloadAction<string>) {
      const name = action.payload;
      const index = state.heroPowers.indexOf(name);
      if (index >= 0) {
        state.heroPowers.splice(index, 1);
      } else if (state.heroPowers.length < 4) {
        state.heroPowers.push(name);
      }
    },
    clearHeroPowers(state) {
      state.heroPowers = [];
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
    toggleEquippedEnabled(state) {
      state.equippedEnabled = !state.equippedEnabled;
      if (!state.equippedEnabled) {
        state.equipped = Array(2).fill("");
      }
    },
    toggleUseOverrides(state) {
      state.useOverrides = !state.useOverrides;
    },
    setMetricInputValue(
      state,
      action: PayloadAction<{ metricId: string; inputId: string; value: MetricInputValue }>,
    ) {
      const { metricId, inputId, value } = action.payload;
      if (!state.metricInputs[metricId]) {
        state.metricInputs[metricId] = {};
      }
      state.metricInputs[metricId][inputId] = value;
    },
    clearMetricInputValue(
      state,
      action: PayloadAction<{ metricId: string; inputId: string }>,
    ) {
      const { metricId, inputId } = action.payload;
      if (!state.metricInputs[metricId]) return;
      delete state.metricInputs[metricId][inputId];
      if (Object.keys(state.metricInputs[metricId]).length === 0) {
        delete state.metricInputs[metricId];
      }
    },
    clearMetricInputsForMetric(state, action: PayloadAction<string>) {
      delete state.metricInputs[action.payload];
    },
    setWeightType(state, action: PayloadAction<{ index: number; type: string }>) {
      state.weights[action.payload.index].type = action.payload.type;
    },
    setWeightValue(state, action: PayloadAction<{ index: number; value: number }>) {
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
    setMinGroupValue(state, action: PayloadAction<{ index: number; value: number }>) {
      state.minAttrGroups[action.payload.index].value = action.payload.value;
    },
    addAttrToGroup(state, action: PayloadAction<{ index: number; attr: string }>) {
      const group = state.minAttrGroups[action.payload.index];
      if (!group.attrs.includes(action.payload.attr)) {
        group.attrs.push(action.payload.attr);
      }
    },
    removeAttrFromGroup(state, action: PayloadAction<{ index: number; attr: string }>) {
      const group = state.minAttrGroups[action.payload.index];
      group.attrs = group.attrs.filter((a) => a !== action.payload.attr);
    },
    importState(_, action: PayloadAction<InputState & { heroPower?: { hero: string; name: string } | null }>) {
      const next: InputState & { heroPower?: { hero: string; name: string } | null } = { ...action.payload };
      const normalizedList = Array.isArray(next.heroPowers)
        ? next.heroPowers.filter((name): name is string => typeof name === "string")
        : [];
      if (!normalizedList.length && next.heroPower && next.heroPower.hero === next.hero) {
        normalizedList.push(next.heroPower.name);
      }
      next.heroPowers = normalizedList.slice(0, 4);
      if (!next.metricInputs || typeof next.metricInputs !== "object") {
        next.metricInputs = {};
      }
      if ("enemyHasArmor" in next) {
        delete (next as { enemyHasArmor?: unknown }).enemyHasArmor;
      }
      delete next.heroPower;
      return next;
    },
    bumpOverrideVersion(state) {
      state.overrideVersion += 1;
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
  toggleEquippedEnabled,
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
  toggleUseOverrides,
  setMetricInputValue,
  clearMetricInputValue,
  clearMetricInputsForMetric,
  bumpOverrideVersion,
  importState,
  toggleHeroPower,
  clearHeroPowers,
} = inputSlice.actions;

export default inputSlice.reducer;
