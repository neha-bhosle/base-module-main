import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiStatus } from "../../../models/apiStatus";

import { ResponseContentEntity } from "../../../models/response-content-entity";
import practiceProfileService from "../../../services/auth/practice-profile-service/practice-profile-service";
import { ErrorResponseEntity } from "src/models/error-response";

export interface EditClinicianStatusState {
  data: string | null;
  status: string;
  error: string | null;
}

const initialState: EditClinicianStatusState = {
  data: null,
  status: apiStatus.IDLE,
  error: null,
};

export const editClinicianStatus = createAsyncThunk(
  "EditClinicianStatusReducer",
  async (payload: { clinicianId: string; flag: boolean }) => {
    try {
      const response: ResponseContentEntity<null> =
        await practiceProfileService.editClinicianStatus(
          payload.clinicianId,
          payload.flag
        );
      const statusCode = parseInt(response?.code || "0", 10);
      if (statusCode >= 400) {
        throw new Error(response?.message || "Failed to update clinician status");
      }
      return response?.message;
    } catch (error: unknown) {
      if ((error as ErrorResponseEntity)?.body?.message) {
        throw new Error((error as ErrorResponseEntity).body.message);
      }
      throw new Error("Failed to update clinician status");
    }
  }
);

const editClinicianStatusReducerSlice = createSlice({
  name: "EditClinicianStatusReducer",
  initialState,
  reducers: {
    resetEditClinicianStatusReducer: (state) => {
      state.data = null;
      state.status = apiStatus.IDLE;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(editClinicianStatus.pending, (state) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(editClinicianStatus.fulfilled, (state, action) => {
        state.status = apiStatus.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(editClinicianStatus.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

const EditClinicianStatusReducer = editClinicianStatusReducerSlice.reducer;
export default EditClinicianStatusReducer;
export const editClinicianStatusReducerAction =
  editClinicianStatusReducerSlice.actions;
