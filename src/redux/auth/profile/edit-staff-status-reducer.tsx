import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiStatus } from "../../../models/apiStatus";

import { ResponseContentEntity } from "../../../models/response-content-entity";
import practiceProfileService from "../../../services/auth/practice-profile-service/practice-profile-service";
import { ErrorResponseEntity } from "src/models/error-response";
export interface EditLocationStatusState {
  data: string | null;
  status: string;
  error: string | null;
}

const initialState: EditLocationStatusState = {
  data: null,
  status: apiStatus.IDLE,
  error: null,
};

export const editStaffStatus = createAsyncThunk(
  "EditStaffStatusReducer",
  async (payload: { staffId: string; flag: boolean }) => {
    try {
      const response: ResponseContentEntity<null> =
        await practiceProfileService.editStaffStatus(
          payload.staffId,
          payload.flag
        );
      const statusCode = parseInt(response?.code || "0", 10);
      if (statusCode >= 400) {
        throw new Error(response?.message || "Failed to update staff");
      }
      return response?.message;
    } catch (error: unknown) {
      if ((error as ErrorResponseEntity)?.body?.message) {
        throw new Error((error as ErrorResponseEntity).body.message);
      }
      throw new Error("Failed to update staff");
    }
  }
);

const editStaffStatusReducerSlice = createSlice({
  name: "EditStaffStatusReducer",
  initialState,
  reducers: {
    resetEditStaffStatusReducer: (state) => {
      state.data = null;
      state.status = apiStatus.IDLE;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(editStaffStatus.pending, (state) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(editStaffStatus.fulfilled, (state, action) => {
        state.status = apiStatus.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(editStaffStatus.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

const EditStaffStatusReducer = editStaffStatusReducerSlice.reducer;
export default EditStaffStatusReducer;
export const editStaffStatusReducerAction =
  editStaffStatusReducerSlice.actions;
