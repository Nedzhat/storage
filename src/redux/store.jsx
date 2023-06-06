import { configureStore } from "@reduxjs/toolkit";

import { devicesReducer } from "./slices/allEquipmentSlice";
import { filterReducer } from "./slices/filterDeviceSlice";
import { userReducer } from "../redux/slices/userSlice";

export const store = configureStore({
  reducer: {
    devices: devicesReducer,
    filter: filterReducer,
    user: userReducer,
  },
});
