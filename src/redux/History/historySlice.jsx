import { createSlice } from "@reduxjs/toolkit";
import { createAction, fetchHistory } from "./operation";

const historyInitialState = {
  history: [],
};

const historySlice = createSlice({
  name: "history",
  initialState: historyInitialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.history = action.payload;
      })
      .addCase(createAction.fulfilled, (state, action) => {
        state.history.push(action.payload);
      }),
});

export const historyReducer = historySlice.reducer;
