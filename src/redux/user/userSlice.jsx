import { createSlice } from "@reduxjs/toolkit";
import { Notify } from "notiflix";

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
  // extraReducers: {
  //   [register.fulfilled](state, action) {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token;
  //     state.isLoggedIn = true;
  //     Notify.success(`Welcome ${action.payload.user.name}`);
  //   },
  // },
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.isLoggedIn = true;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
