/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../../services/auth/authService";
import { apiStatus } from "../../models/apiStatus";

export interface verifyLinkState {
  data: any;
  status: string;
  error: string | null;
}

const initialState: verifyLinkState = {
  data: null,
  status: "idle",
  error: null,
};

export const verifyLink = createAsyncThunk(
  "verifyLink",
  async (payload: { linkId: string; linkType: string }) => {
    const response: any = await authService.verifyPasswordLink(payload);

    if (response?.status >= 400) {
      throw new Error(response?.data?.message);
    }

    return response;
  }
);

const verifyLinkSlice = createSlice({
  name: "verifyLink",
  initialState,
  reducers: {
    resetValues: (state) => {
      state.data = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyLink.pending, (state) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(verifyLink.fulfilled, (state, action) => {
        state.status = apiStatus.SUCCEEDED;
        state.data = action.payload.message;
      })
      .addCase(verifyLink.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

const verifyLinkReducer = verifyLinkSlice.reducer;
export default verifyLinkReducer;
export const verifyLinkAction = verifyLinkSlice.actions;
