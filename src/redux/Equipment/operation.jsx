import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useSelector } from "react-redux";
import { getUser } from "../selectors";

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

export const addDeviceForUser = createAsyncThunk(
  "devices/add",
  async (evt, thunkAPI) => {
    return new Promise(async (resolve, reject) => {
      try {
        return resolve(evt);
      } catch (error) {
        console.log(error.message);
        return thunkAPI.rejectWithValue(error.message);
      }
    });
  }
);
