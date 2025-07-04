import { configureStore } from "@reduxjs/toolkit";
import undoable from "redux-undo";
import inputReducer from "./slices/inputSlice";
import tooltipReducer from "./slices/tooltipSlice";

const store = configureStore({
  reducer: {
    input: undoable(inputReducer),
    tooltip: tooltipReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
