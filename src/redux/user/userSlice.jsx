import { createSlice } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { logIn, logOut, refreshUser } from "./operation";

const initialState = {
  name: null,
  email: null,
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
        state.name = action.payload.name;
        state.email = action.payload.email;
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
        console.log("logout reducers");
        state.name = null;
        state.email = null;
        state.token = null;
        state.id = null;
        state.isLoggedIn = false;
        Notify.info(`You are log out`);
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
      }),
});

export const userReducer = userSlice.reducer;
