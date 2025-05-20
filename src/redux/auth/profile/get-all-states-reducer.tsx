import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ContentObject,
  ResponseArrayContentEntity,
} from "src/models/response-content-entity";
import { apiStatus } from "../../../models/apiStatus";
import practiceProfileService from "../../../services/auth/practice-profile-service/practice-profile-service";
import { USState } from "src/models/all-const";
import { ErrorResponseEntity } from "src/models/error-response";
export interface getAmericanStatesState {
  data: ContentObject<USState> | null;
  status: string;
  error: string | null;
}

const initialState: getAmericanStatesState = {
  data: null,
  status: apiStatus.IDLE,
  error: null,
};

export const getAllAmericanStates = createAsyncThunk(
  "GetAllAmericanStates",
  async () => {
    try {
      const response: ResponseArrayContentEntity<USState> =
        await practiceProfileService.getAllStates();
      return response.data;
    } catch (error: unknown) {
      if ((error as ErrorResponseEntity)?.body?.message) {
        throw new Error((error as ErrorResponseEntity).body.message);
      }
      throw new Error("Failed to get all states");
    }
  }
);

const getAllAmericanStatesReducerSlice = createSlice({
  name: "GetAllAmericanStates",
  initialState,
  reducers: {
    resetAmericanStatesAction: (state) => {
      state.data = null;
      state.status = apiStatus.IDLE;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllAmericanStates.pending, (state) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(getAllAmericanStates.fulfilled, (state, action) => {
        state.status = apiStatus.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(getAllAmericanStates.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

const GetAllAmericanStatesReducer = getAllAmericanStatesReducerSlice.reducer;
export default GetAllAmericanStatesReducer;
export const getAllAmericanStatesAction =
  getAllAmericanStatesReducerSlice.actions;
