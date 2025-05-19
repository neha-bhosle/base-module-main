import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiStatus } from "../../../models/apiStatus";

import { ResponseContentEntity } from "../../../models/response-content-entity";
import practiceProfileService from "../../../services/auth/practice-profile-service/practice-profile-service";
import { ErrorResponseEntity } from "src/models/error-response";
export interface EditLocationStatusState {
  data: string | null;
  status: string;
  error: string | null;
}

const initialState: EditLocationStatusState = {
  data: null,
  status: apiStatus.IDLE,
  error: null,
};

export const editLocationStatus = createAsyncThunk(
  "EditLocationStatusReducer",
  async (payload: { locationId: string; flag: boolean }) => {
    try {
      const response: ResponseContentEntity<null> =
        await practiceProfileService.editLocationStatus(
          payload.locationId,
          payload.flag
        );
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

const editLocationStatusReducerSlice = createSlice({
  name: "EditLocationStatusReducer",
  initialState,
  reducers: {
    resetEditLocationStatusReducer: (state) => {
      state.data = null;
      state.status = apiStatus.IDLE;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(editLocationStatus.pending, (state) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(editLocationStatus.fulfilled, (state, action) => {
        state.status = apiStatus.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(editLocationStatus.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

const EditLocationStatusReducer = editLocationStatusReducerSlice.reducer;
export default EditLocationStatusReducer;
export const editLocationStatusReducerAction =
  editLocationStatusReducerSlice.actions;
