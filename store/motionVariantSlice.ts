import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const motionVariantSlice = createSlice({
  name: "motionVariant",
  initialState: "default",
  reducers: {
    setMotionVariant(_, action: PayloadAction<string>) {
      return action.payload;
    },
  },
});

export const motionVariantActions = motionVariantSlice.actions;

export default motionVariantSlice.reducer;
