import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiStatus } from "../../../models/apiStatus";

import { ResponseContentEntity } from "../../../models/response-content-entity";
import { PatientTypes } from "../../../models/providerGroup";
import practiceProfileService from "../../../services/auth/practice-profile-service/practice-profile-service";
export interface EditPracticeState {
  data: string | null;
  status: string;
  error: string | null;
}

const initialState: EditPracticeState = {
  data: null,
  status: apiStatus.IDLE,
  error: null,
};

export const editPractice = createAsyncThunk(
  "EditPracticeReducer",
  async (payload: PatientTypes) => {
    try {
      const response: ResponseContentEntity<null> =
        await practiceProfileService.editPracticeDetails(payload);
      if (response?.status >= 400) {
        throw new Error(response?.message || "Failed to update practice");
      }
      return response?.message;
    } catch (error: any) {
      throw new Error(
        error?.data?.message || error?.message || "Failed to update practice"
      );
    }
  }
);

const editPracticeReducerSlice = createSlice({
  name: "EditPracticeReducer",
  initialState,
  reducers: {
    resetEditPracticeReducer: (state) => {
      state.data = null;
      state.status = apiStatus.IDLE;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(editPractice.pending, (state) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(editPractice.fulfilled, (state, action) => {
        state.status = apiStatus.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(editPractice.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

const EditPracticeReducer = editPracticeReducerSlice.reducer;
export default EditPracticeReducer;
export const editPracticeReducerAction = editPracticeReducerSlice.actions;
