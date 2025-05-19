import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiStatus } from "../../../models/apiStatus";

import { ErrorResponseEntity } from "../../../models/error-response";
import { ResponseContentEntity } from "../../../models/response-content-entity";
import practiceProfileService from "../../../services/auth/practice-profile-service/practice-profile-service";
import { AllTypes } from "src/models/all-const";

export interface AddClinicianState {
  data: string | null;
  status: string;
  error: string | null;
}

const initialState: AddClinicianState = {
  data: null,
  status: apiStatus.IDLE,
  error: null,
};

export const addClinician = createAsyncThunk(
  "AddClinicianReducer",

  async (payload: AllTypes) => {
    try {
      const response: ResponseContentEntity<null> =
        await practiceProfileService.addClinician(payload);
      const statusCode = parseInt(response?.code || "0", 10);
      if (statusCode >= 400) {
        throw new Error("Failed to update Clinician");
      }
      return response?.message;
    } catch (error: unknown) {
      if ((error as ErrorResponseEntity)?.body?.message) {
        throw new Error((error as ErrorResponseEntity).body.message);
      }
      throw new Error("Failed to update Clinician");
    }
  }
);

const addClinicianReducerSlice = createSlice({
  name: "AddClinicianReducer",
  initialState,
  reducers: {
    resetAddClinicianReducer: (state) => {
      state.data = null;
      state.status = apiStatus.IDLE;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addClinician.pending, (state) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(addClinician.fulfilled, (state, action) => {
        state.status = apiStatus.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(addClinician.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

const AddClinicianReducer = addClinicianReducerSlice.reducer;
export default AddClinicianReducer;
export const addClinicianReducerAction = addClinicianReducerSlice.actions;
