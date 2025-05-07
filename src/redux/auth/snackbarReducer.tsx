import { AlertColor } from "@mui/material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SnackbarState = {
  isSnackbarOpen: boolean;
  severity: AlertColor;
  message: string;
  messageTwo: string;
};

const initialState: SnackbarState = {
  isSnackbarOpen: false,
  severity: "success",
  message: "",
  messageTwo: "",
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbarAction: (
      state,
      action: PayloadAction<Partial<SnackbarState>>
    ) => {
      state.isSnackbarOpen = true;
      if (action.payload.message) state.message = action.payload.message;
      if (action.payload.messageTwo)
        state.messageTwo = action.payload.messageTwo;
      if (action.payload.severity) state.severity = action.payload.severity;
    },
    hideSnackbarAction: (state) => {
      state.isSnackbarOpen = false;
    },
  },
});

export const snackbarAction = snackbarSlice.actions;
export default snackbarSlice.reducer;
