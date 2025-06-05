import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiStatus } from "../../../models/apiStatus";

import { PatientTypes } from "../../../models/providerGroup";
import { ResponseContentEntity } from "../../../models/response-content-entity";
import practiceProfileService from "../../../services/auth/practice-profile-service/practice-profile-service";
import { ErrorResponseEntity } from "src/models/error-response";
export interface EditStaffState {
  data: string | null;
  status: string;
  error: string | null;
}

const initialState: EditStaffState = {
  data: null,
  status: apiStatus.IDLE,
  error: null,
};

export const editStaff = createAsyncThunk(
  "EditStaffReducer",
  async (payload: PatientTypes) => {
    try {
      const response: ResponseContentEntity<null> =
        await practiceProfileService.editStaff(payload);
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

const editStaffReducerSlice = createSlice({
  name: "EditStaffReducer",
  initialState,
  reducers: {
    resetEditStaffReducer: (state) => {
      state.data = null;
      state.status = apiStatus.IDLE;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(editStaff.pending, (state) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(editStaff.fulfilled, (state, action) => {
        state.status = apiStatus.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(editStaff.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

const EditStaffReducer = editStaffReducerSlice.reducer;
export default EditStaffReducer;
export const editStaffReducerAction = editStaffReducerSlice.actions;
