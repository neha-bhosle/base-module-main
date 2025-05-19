import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiStatus } from "../../../models/apiStatus";

import { ErrorResponseEntity } from "../../../models/error-response";
import { ResponseContentEntity } from "../../../models/response-content-entity";
import practiceProfileService from "../../../services/auth/practice-profile-service/practice-profile-service";
import { AllTypes } from "src/models/all-const";

export interface AddStaffState {
  data: string | null;
  status: string;
  error: string | null;
}

const initialState: AddStaffState = {
  data: null,
  status: apiStatus.IDLE,
  error: null,
};

export const addStaff = createAsyncThunk(
  "AddStaffReducer",
  async (payload: AllTypes) => {
    try {
      const response: ResponseContentEntity<null> =
        await practiceProfileService.addStaff(payload);
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

const addStaffReducerSlice = createSlice({
  name: "AddStaffReducer",
  initialState,
  reducers: {
    resetAddStaffReducer: (state) => {
      state.data = null;
      state.status = apiStatus.IDLE;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addStaff.pending, (state) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(addStaff.fulfilled, (state, action) => {
        state.status = apiStatus.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(addStaff.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

const AddStaffReducer = addStaffReducerSlice.reducer;
export default AddStaffReducer;
export const addStaffReducerAction = addStaffReducerSlice.actions;
