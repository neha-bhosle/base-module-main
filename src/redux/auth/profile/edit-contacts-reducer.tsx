import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiStatus } from "../../../models/apiStatus";

import { ResponseContentEntity } from "../../../models/response-content-entity";
import { PatientTypes } from "../../../models/providerGroup";
import practiceProfileService from "../../../services/auth/practice-profile-service/practice-profile-service";
import { ErrorResponseEntity } from "src/models/error-response";
export interface EditContactsState {
  data: string | null;
  status: string;
  error: string | null;
}

const initialState: EditContactsState = {
  data: null,
  status: apiStatus.IDLE,
  error: null,
};

export const editContacts = createAsyncThunk(
  "EditContactsReducer",
  async (payload: PatientTypes) => {
    try {
      const response: ResponseContentEntity<null> =
        await practiceProfileService.editContact(payload);
      const statusCode = parseInt(response?.code || "0", 10);
      if (statusCode >= 400) {
        throw new Error(response?.message || "Failed to update location");
      }
      return response?.message;
    } catch (error: unknown) {
      if ((error as ErrorResponseEntity)?.body?.message) {
        throw new Error((error as ErrorResponseEntity).body.message);
      }
      throw new Error("Failed to update location");
    }
  }
);

const editContactsReducerSlice = createSlice({
  name: "EditContactsReducer",
  initialState,
  reducers: {
    resetEditContactsReducer: (state) => {
      state.data = null;
      state.status = apiStatus.IDLE;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(editContacts.pending, (state) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(editContacts.fulfilled, (state, action) => {
        state.status = apiStatus.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(editContacts.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

const EditContactsReducer = editContactsReducerSlice.reducer;
export default EditContactsReducer;
export const editContactsReducerAction = editContactsReducerSlice.actions;
