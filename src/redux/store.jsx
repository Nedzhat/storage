import { configureStore } from "@reduxjs/toolkit";

import { devicesReducer } from "./devices/devicesSlice";
import { filterReducer } from "./filterDevice/filterDeviceSlice";

export const store = configureStore({
  reducer: {
    devices: devicesReducer,
    filter: filterReducer,
  },
});
