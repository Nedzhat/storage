import { createSlice } from "@reduxjs/toolkit";
import { addDeviceForUser, fetchDevices, returnDevice } from "./operation";
import { Notify } from "notiflix";
import { Report } from "notiflix/build/notiflix-report-aio";

const allEquipmentSlice = createSlice({
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
          `${action.payload.name} returned to the sorting table`,
          "Please inform the administrator Nedzhat of the office about the return of the device.",
          "Okay"
        );
      }),
});

export const allEquipmentReducer = allEquipmentSlice.reducer;
