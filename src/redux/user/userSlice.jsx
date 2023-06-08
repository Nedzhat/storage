import { createSlice } from "@reduxjs/toolkit";

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
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
