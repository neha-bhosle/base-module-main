import { createSlice } from "@reduxjs/toolkit";

export type IntervalsState = {
  intervals: NodeJS.Timeout[];
};

const initialState: IntervalsState = {
  intervals: []
};

const intervalsSlice = createSlice({
  name: "intervals",
  initialState,
  reducers: {
    intervalsPush: (state, action) => {
      state.intervals.push(action.payload);
    },
    intervalsReset: (state) => {
      state.intervals.forEach((item) => clearInterval(item));
      state.intervals = [];
    }
  }
});

const intervalsReducer = intervalsSlice.reducer;
export default intervalsReducer;
export const intervalsAction = intervalsSlice.actions;
