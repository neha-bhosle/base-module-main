import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiStatus } from "../../../models/apiStatus";

import { ResponseContentEntity } from "../../../models/response-content-entity";
import { LocationInfo } from "../../../models/providerGroup";
import practiceProfileService from "../../../services/auth/practice-profile-service/practice-profile-service";
import { ErrorResponseEntity } from "src/models/error-response";
export interface EditLocationState {
  data: string | null;
  status: string;
  error: string | null;
}

const initialState: EditLocationState = {
  data: null,
  status: apiStatus.IDLE,
  error: null,
};

export const editLocation = createAsyncThunk(
  "EditLocationReducer",
  async (payload: LocationInfo) => {
    try {
      const response: ResponseContentEntity<null> =
        await practiceProfileService.editLocation(payload);
      const statusCode = parseInt(response?.code || "0", 10);
      if (statusCode >= 400) {
        throw new Error(response?.message || "Failed to update location");
      }
      return response?.message;
    } catch (error: unknown) {
      if ((error as ErrorResponseEntity)?.body?.message) {
        throw new Error((error as ErrorResponseEntity).body.message);
      }
      throw new Error("Failed to update location");
    }
  }
);

const editLocationReducerSlice = createSlice({
  name: "EditLocationReducer",
  initialState,
  reducers: {
    resetEditLocationReducer: (state) => {
      state.data = null;
      state.status = apiStatus.IDLE;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(editLocation.pending, (state) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(editLocation.fulfilled, (state, action) => {
        state.status = apiStatus.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(editLocation.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

const EditLocationReducer = editLocationReducerSlice.reducer;
export default EditLocationReducer;
export const editLocationReducerAction = editLocationReducerSlice.actions;
