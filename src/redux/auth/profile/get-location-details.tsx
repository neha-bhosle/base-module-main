import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ContentObject,
  ResponseArrayContentEntity,
} from "src/models/response-content-entity";
import { apiStatus } from "../../../models/apiStatus";
import practiceProfileService from "../../../services/auth/practice-profile-service/practice-profile-service";
import { LocationPayload } from "src/models/all-const";
import { ErrorResponseEntity } from "src/models/error-response";
export interface getLocationDetailsState {
  data: ContentObject<LocationPayload> | null;
  status: string;
  error: string | null;
}

const initialState: getLocationDetailsState = {
  data: null,
  status: apiStatus.IDLE,
  error: null,
};

export const getAllLocationDetails = createAsyncThunk(
  "GetAllLocationDetails",
  async (payload: LocationPayload) => {
    try {
      const response: ResponseArrayContentEntity<LocationPayload> =
        await practiceProfileService.getLocationDetails(payload);
      return response.data;
    } catch (error: unknown) {
      if ((error as ErrorResponseEntity)?.body?.message) {
        throw new Error((error as ErrorResponseEntity).body.message);
      }
      throw new Error("Failed to get location details");
    }
  }
);

const getAllLocationDetailsReducerSlice = createSlice({
  name: "GetAllLocationDetails",
  initialState,
  reducers: {
    resetLocationDetailsAction: (state) => {
      state.data = null;
      state.status = apiStatus.IDLE;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllLocationDetails.pending, (state) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(getAllLocationDetails.fulfilled, (state, action) => {
        state.status = apiStatus.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(getAllLocationDetails.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

const GetAllLocationDetailsReducer = getAllLocationDetailsReducerSlice.reducer;
export default GetAllLocationDetailsReducer;
export const getAllLocationDetailsAction =
  getAllLocationDetailsReducerSlice.actions;
