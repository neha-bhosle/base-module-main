import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ContactPayload } from "src/models/all-const";
import { ErrorResponseEntity } from "src/models/error-response";
import {
  ContentObject,
  ResponseArrayContentEntity,
} from "src/models/response-content-entity";
import { apiStatus } from "../../../models/apiStatus";
import practiceProfileService from "../../../services/auth/practice-profile-service/practice-profile-service";

export interface getAllContactsState {
  data: ContentObject<ContactPayload> | null;
  status: string;
  error: string | null;
}

const initialState: getAllContactsState = {
  data: null,
  status: apiStatus.IDLE,
  error: null,
};

export const getAllContacts = createAsyncThunk(
  "GetAllContacts",
  async (payload: ContactPayload) => {
    try {
      const response: ResponseArrayContentEntity<ContactPayload> =
        await practiceProfileService.getAllContacts(payload);
      return response.data;
    } catch (error: unknown) {
      if ((error as ErrorResponseEntity)?.body?.message) {
        throw new Error((error as ErrorResponseEntity).body.message);
      }
      throw new Error("Failed to get all contacts");
    }
  }
);

const getAllContactsReducerSlice = createSlice({
  name: "GetAllContacts",
  initialState,
  reducers: {
    resetContactsAction: (state) => {
      state.data = null;
      state.status = apiStatus.IDLE;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllContacts.pending, (state) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.status = apiStatus.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(getAllContacts.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

const GetAllContactsReducer = getAllContactsReducerSlice.reducer;
export default GetAllContactsReducer;
export const getAllContactsAction = getAllContactsReducerSlice.actions;
