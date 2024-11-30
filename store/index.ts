import { combineReducers, configureStore } from "@reduxjs/toolkit";
import motionVariantReducer from "./motionVariantSlice";

const allReducers = combineReducers({
  motionVariantReducer,
});

const store = configureStore({ reducer: allReducers });

export type RootState = ReturnType<typeof allReducers>;

export default store;
