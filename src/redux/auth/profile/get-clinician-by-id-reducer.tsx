import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetClinicianPayload } from "src/models/all-const";
import { ErrorResponseEntity } from "src/models/error-response";
import {
  ResponseContentEntity
} from "src/models/response-content-entity";
import { apiStatus } from "../../../models/apiStatus";
import practiceProfileService from "../../../services/auth/practice-profile-service/practice-profile-service";

export interface getClinicianByIdState {
  data: GetClinicianPayload | null;
  status: string;
  error: string | null;
}

const initialState: getClinicianByIdState = {
  data: null,
  status: apiStatus.IDLE,
  error: null,
};

export const getClinicianById = createAsyncThunk(
  "GetClinicianById",
  async (payload: GetClinicianPayload | string) => {
    try {
      let uuid: string;
      if (typeof payload === "string") {
        uuid = payload;
      } else {
        uuid = payload.uuid;
      }

      const response: ResponseContentEntity<GetClinicianPayload> =
        await practiceProfileService.getClinicianById(uuid);
      return response;
    } catch (error: unknown) {
      if ((error as ErrorResponseEntity)?.body?.message) {
        throw new Error((error as ErrorResponseEntity).body.message);
      }
      throw new Error("Failed to get clinician by id");
    }
  }
);

const getClinicianByIdReducerSlice = createSlice({
  name: "GetClinicianById",
  initialState,
  reducers: {
    resetCliniciansAction: (state) => {
      state.data = null;
      state.status = apiStatus.IDLE;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getClinicianById.pending, (state) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(getClinicianById.fulfilled, (state, action) => {
        state.status = apiStatus.SUCCEEDED;
        state.data = action.payload.data;
      })
      .addCase(getClinicianById.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

const GetClinicianByIdReducer = getClinicianByIdReducerSlice.reducer;
export default GetClinicianByIdReducer;
export const getClinicianByIdAction = getClinicianByIdReducerSlice.actions;
