import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  requestStatus: 'SUCCESS',
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setItem(state, action) {
      Object.assign(state, action.payload);
    },
  },
});

export const settingReducer = settingSlice.reducer;

export const settingSliceActions = settingSlice.actions;
