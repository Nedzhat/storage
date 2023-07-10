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

import { equipmentsReducer } from "./Equipment/equipmentsSlice";
import { filterReducer } from "./filterEquipment/filterDeviceSlice";
import { userReducer } from "./user/userSlice";
import { employeesReducer } from "./Employees/employeesSlice";

const authPersistConfig = {
  key: "user.employee",
  storage,
  whitelist: ["email"],
};

export const store = configureStore({
  reducer: {
    user: persistReducer(authPersistConfig, userReducer),
    devices: equipmentsReducer,
    employees: employeesReducer,
    filter: filterReducer,
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
