import { createSlice, nanoid } from "@reduxjs/toolkit";
import allDevices from "../../../allDevices.json";

const devicesSlice = createSlice({
  name: "devices",
  initialState: allDevices,
  reducers: {
    addDevice: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, info, sn, type, location, status, employee }) {
        return {
          payload: {
            id: nanoid(),
            name,
            info,
            sn,
            type,
            status,
            location,
            employee,
          },
        };
      },
    },
    deleteDevice(state, action) {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addDevice, deleteDevice } = devicesSlice.actions;

export const devicesReducer = devicesSlice.reducer;
