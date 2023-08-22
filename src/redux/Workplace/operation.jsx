import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const fetchWorkplacesSix = createAsyncThunk(
  "workplacesSix/fetchAll",
  async (_, thunkAPI) => {
    try {
      let workplaces = [];
      const querySnapshot = await getDocs(
        collection(db, "workplace", "headoffice", "6.3")
      );
      querySnapshot.forEach((doc) => {
        workplaces.push(doc.data());
      });
      return workplaces;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchWorkplacesFive = createAsyncThunk(
  "workplacesFive/fetchAll",
  async (_, thunkAPI) => {
    try {
      let workplaces = [];
      const querySnapshot = await getDocs(
        collection(db, "workplace", "headoffice", "5.2")
      );
      querySnapshot.forEach((doc) => {
        workplaces.push(doc.data());
      });
      return workplaces;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchWorkplacesRemote = createAsyncThunk(
  "workplacesRemote/fetchAll",
  async (_, thunkAPI) => {
    try {
      let workplaces = [];
      const querySnapshot = await getDocs(
        collection(db, "workplace", "remote", "remote")
      );
      querySnapshot.forEach((doc) => {
        workplaces.push(doc.data());
      });
      return workplaces;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
