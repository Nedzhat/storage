import { createSlice } from "@reduxjs/toolkit";
import {
  addWorkplaceRemote,
  changeStatusWorkplace,
  fetchWorkplacesFive,
  fetchWorkplacesRemote,
  fetchWorkplacesSix,
} from "./operation";
import { Notify } from "notiflix";

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
      })
      .addCase(changeStatusWorkplace.fulfilled, (state, action) => {
        const idx = state.sixFloor.findIndex(
          (item) => item.name === action.payload.name
        );
        if (idx !== -1) {
          state.sixFloor.splice(idx, 1, action.payload);
        }
        Notify.success(`You change status workplace ${action.payload.name}`);
      }),
});

export const workplaceReducer = workplaceSlice.reducer;
