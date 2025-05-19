import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ContentObject,
  ResponseArrayContentEntity,
} from "src/models/response-content-entity";
import { apiStatus } from "../../../models/apiStatus";
import practiceProfileService from "../../../services/auth/practice-profile-service/practice-profile-service";
import { AllTypes, ClinicianPayload } from "src/models/all-const";
import { ErrorResponseEntity } from "src/models/error-response";
export interface getAllCliniciansState {
  data: ContentObject<any> | null;
  status: string;
  error: string | null;
}

const initialState: getAllCliniciansState = {
  data: null,
  status: apiStatus.IDLE,
  error: null,
};

export const getAllClinicians = createAsyncThunk(
  "GetAllClinicians",
  async (payload: ClinicianPayload) => {
    try {
      const response: ResponseArrayContentEntity<AllTypes> =
        await practiceProfileService.getAllClinicians(payload);   
      return response.data;
    } catch (error: unknown) {
      if ((error as ErrorResponseEntity)?.body?.message) {
        throw new Error((error as ErrorResponseEntity).body.message);
      }
      throw new Error("Failed to get all clinicians");
    }
  }
);

const getAllCliniciansReducerSlice = createSlice({
  name: "GetAllClinicians",
  initialState,
  reducers: {
    resetCliniciansAction: (state) => {
      state.data = null;
      state.status = apiStatus.IDLE;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllClinicians.pending, (state) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(getAllClinicians.fulfilled, (state, action) => {
        state.status = apiStatus.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(getAllClinicians.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

const GetAllCliniciansReducer = getAllCliniciansReducerSlice.reducer;
export default GetAllCliniciansReducer;
export const getAllCliniciansAction = getAllCliniciansReducerSlice.actions;
