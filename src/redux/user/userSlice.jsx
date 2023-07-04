import { createSlice } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { logIn, logOut, refreshUser } from "./operation";

const initialState = {
  employee: {
    name: null,
    email: null,
    equipment: [],
    position: null,
    projects: null,
  },
  token: null,
  id: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(logIn.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.employee.name = action.payload.name;
        state.employee.email = action.payload.email;
        state.employee.equipment = action.payload.equipment;
        state.employee.position = action.payload.position;
        state.employee.projects = action.payload.projects;
        state.id = action.payload.id;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        Notify.success(`Welcome ${action.payload.name}`);
      })
      .addCase(logIn.rejected, (state) => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.employee.name = null;
        state.employee.email = null;
        state.employee.equipment = [];
        state.employee.position = null;
        state.employee.projects = null;
        state.token = null;
        state.id = null;
        state.isLoggedIn = false;
        Notify.info(`You are log out`);
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.employee.name = action.payload.name;
        state.employee.email = action.payload.email;
        state.employee.equipment = action.payload.equipment;
        state.employee.position = action.payload.position;
        state.employee.projects = action.payload.projects;
        state.id = action.payload.id;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
      }),
});

export const userReducer = userSlice.reducer;
