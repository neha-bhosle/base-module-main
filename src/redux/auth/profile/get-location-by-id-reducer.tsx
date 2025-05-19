import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LocationPayload } from "src/models/all-const";
import { ErrorResponseEntity } from "src/models/error-response";
import {
  ResponseContentEntity
} from "src/models/response-content-entity";
import { apiStatus } from "../../../models/apiStatus";
import practiceProfileService from "../../../services/auth/practice-profile-service/practice-profile-service";

export interface getLocationByIdState {
  data: LocationPayload | null;
  status: string;
  error: string | null;
}

const initialState: getLocationByIdState = {
  data: null,
  status: apiStatus.IDLE,
  error: null,
};

export const getLocationById = createAsyncThunk(
  "GetLocationById",
  async (payload: LocationPayload) => {
    try {
      const response: ResponseContentEntity<LocationPayload> =
        await practiceProfileService.getLocationById(payload.uuid);
      return response;
    } catch (error: unknown) {
      if ((error as ErrorResponseEntity)?.body?.message) {
        throw new Error((error as ErrorResponseEntity).body.message);
      }
      throw new Error("Failed to get clinician by id");
    }
  }
);

const getLocationByIdReducerSlice = createSlice({
  name: "GetLocationById",
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
      .addCase(getLocationById.pending, (state) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(getLocationById.fulfilled, (state, action) => {
        state.status = apiStatus.SUCCEEDED;
        state.data = action.payload.data;
      })
      .addCase(getLocationById.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

const GetLocationByIdReducer = getLocationByIdReducerSlice.reducer;
export default GetLocationByIdReducer;
export const getLocationByIdAction = getLocationByIdReducerSlice.actions;
