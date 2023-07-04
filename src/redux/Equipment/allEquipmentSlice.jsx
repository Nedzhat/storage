import { createSlice } from "@reduxjs/toolkit";
import { addDeviceForUser, fetchDevices } from "./operation";

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
        console.log(action.payload.device);
        console.log(action.payload.user);
      }),
});

export const allEquipmentReducer = allEquipmentSlice.reducer;

// addDevice: {
//   reducer(state, action) {
//     state.push(action.payload);
//   },
//   prepare({ name, info, sn, type, location, status, employee }) {
//     return {
//       payload: {
//         id: nanoid(),
//         name,
//         info,
//         sn,
//         type,
//         status,
//         location,
//         employee,
//       },
//     };
//   },
// },
// deleteDevice(state, action) {
//   const index = state.findIndex((task) => task.id === action.payload);
//   state.splice(index, 1);
// },
