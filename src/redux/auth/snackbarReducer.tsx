import { AlertColor } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

export type SnackbarState = {
  isSnackbarOpen: boolean;
  severity?: AlertColor;
  message?: string;
};

const initialState: SnackbarState = {
  isSnackbarOpen: false,
  message: ""
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbarAction: (state, action) => {
      state.isSnackbarOpen = action.payload.isSnackbarOpen;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
    hideSnackbarAction: (state) => {
      state.isSnackbarOpen = false;
    }
  }
});

const snackbarReducer = snackbarSlice.reducer;
export default snackbarReducer;
export const snackbarAction = snackbarSlice.actions;
