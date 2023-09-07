import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const fetchHistory = createAsyncThunk(
  "history/fetchAll",
  async (_, thunkAPI) => {
    try {
      let history = [];
      const querySnapshot = await getDocs(collection(db, "history"));
      querySnapshot.forEach((doc) => {
        history.push(doc.data());
      });

      return history;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
