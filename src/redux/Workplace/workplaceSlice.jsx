import { createSlice } from "@reduxjs/toolkit";
import {
  addWorkplaceRemote,
  fetchWorkplacesFive,
  fetchWorkplacesRemote,
  fetchWorkplacesSix,
} from "./operation";

const filterInitialState = {
  sixFloor: [],
  fiveFloor: [],
  remote: [],
};

const workplaceSlice = createSlice({
  name: "workplaces",
  initialState: filterInitialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchWorkplacesSix.fulfilled, (state, action) => {
        state.sixFloor = action.payload;
      })
      .addCase(fetchWorkplacesFive.fulfilled, (state, action) => {
        state.fiveFloor = action.payload;
      })
      .addCase(fetchWorkplacesRemote.fulfilled, (state, action) => {
        state.remote = action.payload;
      })
      .addCase(addWorkplaceRemote.fulfilled, (state, action) => {
        state.remote.push(action.payload);
      }),
});

export const workplaceReducer = workplaceSlice.reducer;
