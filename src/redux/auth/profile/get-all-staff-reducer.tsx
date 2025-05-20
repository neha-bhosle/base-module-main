import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StaffPayload } from "src/models/all-const";
import { ErrorResponseEntity } from "src/models/error-response";
import {
  ContentObject,
  ResponseArrayContentEntity,
} from "src/models/response-content-entity";
import { apiStatus } from "../../../models/apiStatus";
import practiceProfileService from "../../../services/auth/practice-profile-service/practice-profile-service";

export interface getAllStaffState {
  data: ContentObject<StaffPayload> | null;
  status: string;
  error: string | null;
}

const initialState: getAllStaffState = {
  data: null,
  status: apiStatus.IDLE,
  error: null,
};

export const getAllStaff = createAsyncThunk(
  "GetAllStaff",
  async (payload: StaffPayload) => {
    try {
      const response: ResponseArrayContentEntity<StaffPayload> =
        await practiceProfileService.getAllStaff(payload);
      return response.data;
    } catch (error: unknown) {
      if ((error as ErrorResponseEntity)?.body?.message) {
        throw new Error((error as ErrorResponseEntity).body.message);
      }
      throw new Error("Failed to get all staff");
    }
  }
);

const getAllStaffReducerSlice = createSlice({
  name: "GetAllStaff",
  initialState,
  reducers: {
    resetStaffAction: (state) => {
      state.data = null;
      state.status = apiStatus.IDLE;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllStaff.pending, (state) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(getAllStaff.fulfilled, (state, action) => {
        state.status = apiStatus.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(getAllStaff.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

const GetAllStaffReducer = getAllStaffReducerSlice.reducer;
export default GetAllStaffReducer;
export const getAllStaffAction = getAllStaffReducerSlice.actions;
