import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ContentObject,
  ResponseArrayContentEntity,
} from "src/models/response-content-entity";
import { apiStatus } from "../../../models/apiStatus";
import practiceProfileService from "../../../services/auth/practice-profile-service/practice-profile-service";

export interface getAmericanStatesState {
  data: ContentObject<any> | null;
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
      console.log("Making API call to get states...");
      const response: ResponseArrayContentEntity<any> =
        await practiceProfileService.getAllStates();
      console.log("States API response:", response);
      return response.data;
    } catch (error: any) {
      console.error("Error fetching states:", error);
      throw new Error(
        error?.data?.message || error?.message || "Failed to fetch states"
      );
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
