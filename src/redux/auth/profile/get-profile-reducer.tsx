import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ContentObject, ResponseArrayContentEntity } from "src/models/response-content-entity";
import { apiStatus } from "../../../models/apiStatus";
import { GetAllProviderPayload, providerResponse } from "src/models/providerModel";
import practiceProfileService from "../../../services/auth/practice-profile-service/practice-profile-service";

export interface getPracticeDetailsState {
  data: ContentObject<any> | null;
  status: string;
  error: string | null;
}

const initialState: getPracticeDetailsState = {
  data: null,
  status: apiStatus.IDLE,
  error: null
};

export const getAllPracticeDetails = createAsyncThunk(
  "GetAllPracticeDetails",
  async (payload: any) => {
    try {
      const response: ResponseArrayContentEntity<any> =
        await practiceProfileService.getPracticeDetails(payload);
      return response.data;
    } catch (error) {
      throw new Error(error?.data?.message);
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
    }
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
  }
});

const GetAllPracticeDetailsReducer = getAllPracticeDetailsReducerSlice.reducer;
export default GetAllPracticeDetailsReducer;
export const getAllPracticeDetailsAction = getAllPracticeDetailsReducerSlice.actions;
