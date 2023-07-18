import { createSlice } from "@reduxjs/toolkit";
import {
  addDeviceForUser,
  createDevice,
  fetchDevices,
  returnDevice,
} from "./operation";
import { Notify } from "notiflix";
import { Report } from "notiflix/build/notiflix-report-aio";

const equipmentsSlice = createSlice({
  name: "devices",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchDevices.pending, (state) => {
        // state.isLoading = true;
      })
      .addCase(fetchDevices.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addDeviceForUser.fulfilled, (state, action) => {
        const idx = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (idx !== -1) {
          state.items.splice(idx, 1, action.payload);
        }
        Notify.success(`${action.payload.name} added in your equipment`);
      })
      .addCase(returnDevice.fulfilled, (state, action) => {
        const idx = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (idx !== -1) {
          state.items.splice(idx, 1, action.payload);
        }
        Report.success(
          `${action.payload.name} returned`,
          "Please inform the office administrator Nedzhat about the return of the device.",
          "Okay"
        );
      })
      .addCase(createDevice.fulfilled, (state, action) => {
        state.items.push(action.payload);
        Notify.success(`${action.payload.name} created in our equipment`);
      }),
});

export const equipmentsReducer = equipmentsSlice.reducer;
