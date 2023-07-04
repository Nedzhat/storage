import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const fetchDevices = createAsyncThunk(
  "devices/fetchAll",
  async (_, thunkAPI) => {
    return new Promise(async (resolve) => {
      try {
        let devices = [];
        const querySnapshot = await getDocs(collection(db, "devices"));
        querySnapshot.forEach((doc) => {
          const res = doc.data();
          res.id = doc.id;
          devices.push(res);
        });
        return resolve(devices);
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    });
  }
);
