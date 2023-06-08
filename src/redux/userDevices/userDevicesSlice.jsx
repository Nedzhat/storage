import { createSlice, nanoid } from "@reduxjs/toolkit";
import allDevices from "../../../allDevices.json";

const userDevicesSlice = createSlice({
  name: "userDevices",
  initialState: allDevices,
  reducers: {
    addDeviceToUser: {
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
    deleteDeviceFromUser(state, action) {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addDeviceToUser, deleteDeviceFromUser } =
  userDevicesSlice.actions;

export const userDevicesReducer = userDevicesSlice.reducer;
