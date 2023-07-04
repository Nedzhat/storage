import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

const filtersInitialState = {
  status: statusFilters.all,
  type: statusFilters.all,
};

const filterDeviceSlice = createSlice({
  name: "filter",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
    setTypeFilter(state, action) {
      state.type = action.payload;
    },
  },
});

export const { setStatusFilter, setTypeFilter } = filterDeviceSlice.actions;
export const filterReducer = filterDeviceSlice.reducer;
