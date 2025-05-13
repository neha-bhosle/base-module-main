/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../../services/auth/authService";
import { apiStatus } from "../../models/apiStatus";

export interface MyApiState {
  data: any;
  status: string;
  error: string | null;
}

const initialState: MyApiState = {
  data: null,
  status: "idle",
  error: null,
};

export const login = createAsyncThunk(
  "Login",
  async (payload: { email: string; password: string }) => {
    const response: any = await authService.login(payload);

    if (response?.status >= 400) {
      throw new Error(response?.data?.message);
    }

    return response.data;
  }
);

const loginSlice = createSlice({
  name: "Login",
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
      .addCase(login.pending, (state) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = apiStatus.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

const loginReducer = loginSlice.reducer;
export default loginReducer;
export const loginAction = loginSlice.actions;
