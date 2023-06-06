import { createSlice } from "@reduxjs/toolkit";

const myDevicesSlice = createSlice({
  name: "myDevices",
  initialState: [],
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

export const { addDevice, deleteDevice } = myDevicesSlice.actions;

export const devicesReducer = myDevicesSlice.reducer;
