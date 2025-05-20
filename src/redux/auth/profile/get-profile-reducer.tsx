import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ContentObject,
  ResponseArrayContentEntity,
} from "src/models/response-content-entity";
import { apiStatus } from "../../../models/apiStatus";
import practiceProfileService from "../../../services/auth/practice-profile-service/practice-profile-service";
import { ProfilePayload } from "src/models/all-const";
import { ErrorResponseEntity } from "src/models/error-response";
export interface getPracticeDetailsState {
  data: ContentObject<ProfilePayload> | null;
  status: string;
  error: string | null;
}

const initialState: getPracticeDetailsState = {
  data: null,
  status: apiStatus.IDLE,
  error: null,
};

export const getAllPracticeDetails = createAsyncThunk(
  "GetAllPracticeDetails",
  async () => {
    try {
      const response: ResponseArrayContentEntity<ProfilePayload> =
        await practiceProfileService.getPracticeDetails();
      return response.data;
    } catch (error: unknown) {
      if ((error as ErrorResponseEntity)?.body?.message) {
        throw new Error((error as ErrorResponseEntity).body.message);
      }
      throw new Error("Failed to get practice details");
    }
  }
);

const getAllPracticeDetailsReducerSlice = createSlice({
  name: "GetAllPracticeDetails",
  initialState,
  reducers: {
    resetPracticeDetailsAction: (state) => {
      state.data = null;
      state.status = apiStatus.IDLE;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPracticeDetails.pending, (state) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(getAllPracticeDetails.fulfilled, (state, action) => {
        state.status = apiStatus.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(getAllPracticeDetails.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

const GetAllPracticeDetailsReducer = getAllPracticeDetailsReducerSlice.reducer;
export default GetAllPracticeDetailsReducer;
export const getAllPracticeDetailsAction =
  getAllPracticeDetailsReducerSlice.actions;
