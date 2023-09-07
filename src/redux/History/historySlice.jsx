import { createSlice } from "@reduxjs/toolkit";
import { fetchHistory } from "./operation";

const historyInitialState = {
  history: [],
};

const historySlice = createSlice({
  name: "history",
  initialState: historyInitialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(fetchHistory.fulfilled, (state, action) => {
      state.history = action.payload;
    }),
});

export const historyReducer = historySlice.reducer;
