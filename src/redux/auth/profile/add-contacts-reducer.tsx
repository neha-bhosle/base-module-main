import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiStatus } from "../../../models/apiStatus";

import { ErrorResponseEntity } from "../../../models/error-response";
import { ResponseContentEntity } from "../../../models/response-content-entity";
import practiceProfileService from "../../../services/auth/practice-profile-service/practice-profile-service";
import { AllTypes } from "src/models/all-const";

export interface AddContactsState {
  data: string | null;
  status: string;
  error: string | null;
}

const initialState: AddContactsState = {
  data: null,
  status: apiStatus.IDLE,
  error: null,
};

export const addContacts = createAsyncThunk(
  "AddContactsReducer",
  async (payload: AllTypes  ) => {
    try {
      const response: ResponseContentEntity<null> =
        await practiceProfileService.addContact(payload);
      const statusCode = parseInt(response?.code || "0", 10);
      if (statusCode >= 400) {
        throw new Error("Failed to update Contacts");
      }
      return response?.message;
    } catch (error: unknown) {
      if ((error as ErrorResponseEntity)?.body?.message) {
        throw new Error((error as ErrorResponseEntity).body.message);
      }
      throw new Error("Failed to update Contacts");
    }
  }
);

const addContactsReducerSlice = createSlice({
  name: "AddContactsReducer",
  initialState,
  reducers: {
    resetAddContactsReducer: (state) => {
      state.data = null;
      state.status = apiStatus.IDLE;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addContacts.pending, (state) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.status = apiStatus.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

const AddContactsReducer = addContactsReducerSlice.reducer;
export default AddContactsReducer;
export const addContactsReducerAction = addContactsReducerSlice.actions;
