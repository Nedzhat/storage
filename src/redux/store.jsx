import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { devicesReducer } from "./Equipment/allEquipmentSlice";
import { filterReducer } from "./filterEquipment/filterDeviceSlice";
import { userReducer } from "./user/userSlice";
import { userDevicesReducer } from "./userDevices/userDevicesSlice";

const authPersistConfig = {
  key: "user",
  storage,
  whitelist: ["email"],
};

export const store = configureStore({
  reducer: {
    user: persistReducer(authPersistConfig, userReducer),
    devices: devicesReducer,
    filter: filterReducer,
    userDevices: userDevicesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
