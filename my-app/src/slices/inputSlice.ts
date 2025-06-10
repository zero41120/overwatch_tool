import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { WeightRow } from '../types';

export interface InputState {
  hero: string;
  cash: number;
  equipped: (string | '')[];
  toBuy: number;
  avoid: string[];
  weights: WeightRow[];
  error: string;
}

const initialState: InputState = {
  hero: 'Ashe',
  cash: 11000,
  equipped: Array(6).fill(''),
  toBuy: 6,
  avoid: [],
  weights: [{ type: '', weight: 1 }],
  error: '',
};

const inputSlice = createSlice({
  name: 'input',
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
    setWeightType(state, action: PayloadAction<{ index: number; type: string }>) {
      state.weights[action.payload.index].type = action.payload.type;
    },
    setWeightValue(
      state,
      action: PayloadAction<{ index: number; value: number }>
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
  },
});

export const {
  setHero,
  setCash,
  setEquipped,
  setToBuy,
  addAvoid,
  removeAvoid,
  setWeightType,
  setWeightValue,
  addWeightRow,
  removeWeightRow,
  setError,
} = inputSlice.actions;

export default inputSlice.reducer;
