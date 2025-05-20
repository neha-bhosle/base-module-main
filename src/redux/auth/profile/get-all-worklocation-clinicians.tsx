import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiStatus } from "../../../models/apiStatus";
import practiceProfileService from "../../../services/auth/practice-profile-service/practice-profile-service";

export interface getWorkLocationClinicianState {
  data: Record<string, string> | null;
  status: string;
  error: string | null;
}

const initialState: getWorkLocationClinicianState = {
  data: null,
  status: apiStatus.IDLE,
  error: null,
};

interface WorkLocationResponse {
  data: Record<string, string>;
  message: string | null;
  code: string;
  path: string;
  requestId: string;
  version: string;
}

export const getAllWorkLocationClinician = createAsyncThunk(
  "GetAllWorkLocationClinician",
  async () => {
    try {
      const response: WorkLocationResponse =
        await practiceProfileService.getAllWorkLocationClinician();
      return response.data;
    } catch (error: any) {
      throw new Error(
        error?.data?.message ||
          error?.message ||
          "Failed to fetch work location clinicians"
      );
    }
  }
);

const getAllWorkLocationClinicianReducerSlice = createSlice({
  name: "GetAllWorkLocationClinician",
  initialState,
  reducers: {
    resetWorkLocationClinicianAction: (state) => {
      state.data = null;
      state.status = apiStatus.IDLE;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllWorkLocationClinician.pending, (state) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(getAllWorkLocationClinician.fulfilled, (state, action) => {
        state.status = apiStatus.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(getAllWorkLocationClinician.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

const GetAllWorkLocationClinicianReducer =
  getAllWorkLocationClinicianReducerSlice.reducer;
export default GetAllWorkLocationClinicianReducer;
export const getAllWorkLocationClinicianAction =
  getAllWorkLocationClinicianReducerSlice.actions;
