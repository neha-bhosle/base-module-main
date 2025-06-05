import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiStatus } from "../../../models/apiStatus";

import { ResponseContentEntity } from "../../../models/response-content-entity";
import { PatientTypes } from "../../../models/providerGroup";
import practiceProfileService from "../../../services/auth/practice-profile-service/practice-profile-service";
import { ErrorResponseEntity } from "../../../models/error-response";
export interface EditClinicianState {
  data: string | null;
  status: string;
  error: string | null;
}

const initialState: EditClinicianState = {
  data: null,
  status: apiStatus.IDLE,
  error: null,
};

export const editClinician = createAsyncThunk(
  "EditClinicianReducer",
  async (payload: PatientTypes) => {
    try {
      const response: ResponseContentEntity<null> =
        await practiceProfileService.editClinician(payload);
      const statusCode = parseInt(response?.code || "0", 10);
      if (statusCode >= 400) {
        throw new Error(response?.message || "Failed to update clinician");
      }
      return response?.message;
    } catch (error: unknown) {
      if ((error as ErrorResponseEntity)?.body?.message) {
        throw new Error((error as ErrorResponseEntity).body.message);
      }
      throw new Error("Failed to update clinician");
    }
  }
);

const editClinicianReducerSlice = createSlice({
  name: "EditClinicianReducer",
  initialState,
  reducers: {
    resetEditClinicianReducer: (state) => {
      state.data = null;
      state.status = apiStatus.IDLE;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(editClinician.pending, (state) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(editClinician.fulfilled, (state, action) => {
        state.status = apiStatus.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(editClinician.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

const EditClinicianReducer = editClinicianReducerSlice.reducer;
export default EditClinicianReducer;
export const editClinicianReducerAction = editClinicianReducerSlice.actions;
