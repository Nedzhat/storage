import { createSlice } from "@reduxjs/toolkit";
import { fetchEmployees } from "./operation";

const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    items: [],
  },
  extraReducers: (builder) =>
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      state.items = action.payload;
    }),
});

export const employeesReducer = employeesSlice.reducer;
