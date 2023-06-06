import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "../constants";

const filtersInitialState = {
  status: statusFilters.all,
};

const filterDeviceSlice = createSlice({
  name: "filter",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filterDeviceSlice.actions;
export const filterReducer = filterDeviceSlice.reducer;
