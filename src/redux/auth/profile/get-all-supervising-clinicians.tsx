import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ErrorResponseEntity } from "src/models/error-response";
import { apiStatus } from "../../../models/apiStatus";
import practiceProfileService from "../../../services/auth/practice-profile-service/practice-profile-service";
export interface getAllSupervisingCliniciansState {
  data: Record<string, string> | null;
  status: string;
  error: string | null;
}

const initialState: getAllSupervisingCliniciansState = {
  data: null,
  status: apiStatus.IDLE,
  error: null,
};

export const getAllSupervisingClinicians = createAsyncThunk(
  "GetAllSupervisingClinicians",
  async () => {
    try {
      const response = await practiceProfileService.getAllSupervisorClinician();
      return response.data;
    } catch (error: unknown) {
      if ((error as ErrorResponseEntity)?.body?.message) {
        throw new Error((error as ErrorResponseEntity).body.message);
      }
      throw new Error("Failed to get all supervisor clinicians");
    }
  }
);

const getAllSupervisingCliniciansReducerSlice = createSlice({
  name: "GetAllSupervisingClinicians",
  initialState,
  reducers: {
    resetSupervisingCliniciansAction: (state) => {
      state.data = null;
      state.status = apiStatus.IDLE;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllSupervisingClinicians.pending, (state) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(getAllSupervisingClinicians.fulfilled, (state, action) => {
        state.status = apiStatus.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(getAllSupervisingClinicians.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

const GetAllSupervisingCliniciansReducer =
  getAllSupervisingCliniciansReducerSlice.reducer;
export default GetAllSupervisingCliniciansReducer;
export const getAllSupervisingCliniciansAction =
  getAllSupervisingCliniciansReducerSlice.actions;
