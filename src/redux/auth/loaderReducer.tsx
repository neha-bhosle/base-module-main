import { createSlice } from "@reduxjs/toolkit";

export type LoaderState = {
  showLoader: boolean;
};

const initialState: LoaderState = {
  showLoader: false
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    showLoader: (state) => {
      state.showLoader = true;
    },
    hideLoader: (state) => {
      state.showLoader = false;
    }
  }
});

const loaderReducer = loaderSlice.reducer;
export default loaderReducer;
export const loaderAction = loaderSlice.actions;
