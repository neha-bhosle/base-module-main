import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiStatus } from "../../../models/apiStatus";

import { ErrorResponseEntity } from "../../../models/error-response";
import { LocationInfo } from "../../../models/providerGroup";
import { ResponseContentEntity } from "../../../models/response-content-entity";
import practiceProfileService from "../../../services/auth/practice-profile-service/practice-profile-service";

export interface AddPracticeLocationState {
  data: string | null;
  status: string;
  error: string | null;
}

const initialState: AddPracticeLocationState = {
  data: null,
  status: apiStatus.IDLE,
  error: null,
};

export const addPracticeLocation = createAsyncThunk(
  "AddPracticeLocationReducer",
  async (payload: LocationInfo) => {
    try {
      const response: ResponseContentEntity<null> =
        await practiceProfileService.addLocation(payload);
      const statusCode = parseInt(response?.code || "0", 10);
      if (statusCode >= 400) {
        throw new Error("Failed to update Practice Location");
      }
      return response?.message;
    } catch (error: unknown) {
      if ((error as ErrorResponseEntity)?.body?.message) {
        throw new Error((error as ErrorResponseEntity).body.message);
      }
      throw new Error("Failed to update Practice Location");
    }
  }
);

const addPracticeLocationReducerSlice = createSlice({
  name: "AddPracticeLocationReducer",
  initialState,
  reducers: {
    resetAddPracticeLocationReducer: (state) => {
      state.data = null;
      state.status = apiStatus.IDLE;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addPracticeLocation.pending, (state) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(addPracticeLocation.fulfilled, (state, action) => {
        state.status = apiStatus.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(addPracticeLocation.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

const AddPracticeLocationReducer = addPracticeLocationReducerSlice.reducer;
export default AddPracticeLocationReducer;
export const addPracticeLocationReducerAction =
  addPracticeLocationReducerSlice.actions;
