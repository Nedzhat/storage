import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  query: "",
};

const filterEmployeesSlice = createSlice({
  name: "filterEmployees",
  initialState: filterInitialState,
  reducers: {
    setEmployeesFilter(state, action) {
      state.query = action.payload;
    },
  },
});

export const { setEmployeesFilter } = filterEmployeesSlice.actions;
export const filterEmployeesReducer = filterEmployeesSlice.reducer;
