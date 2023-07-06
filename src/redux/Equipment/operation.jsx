import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
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

export const addDeviceForUser = createAsyncThunk(
  "devices/add",
  async (evt, thunkAPI) => {
    return new Promise(async (resolve, reject) => {
      updateDoc(doc(db, "devices", evt.device.id), {
        employee: evt.user.name,
        employee_email: evt.user.email,
        location: null,
        status: "use",
      })
        .then(() => {
          getDoc(doc(db, "devices", evt.device.id))
            .then((device) => {
              if (device.exists()) {
                const updatedDevice = device.data();
                updatedDevice.id = device.id;
                resolve(updatedDevice);
              } else {
                reject();
              }
            })
            .catch((error) => {
              thunkAPI.rejectWithValue(error.message);
            });
        })
        .catch((error) => {
          thunkAPI.rejectWithValue(error.message);
        });
    });
  }
);

export const returnDevice = createAsyncThunk(
  "devices/return",
  async (id, thunkAPI) => {
    return new Promise(async (resolve, reject) => {
      updateDoc(doc(db, "devices", id), {
        employee: null,
        employee_email: null,
        location: "Sorting table",
        status: "stock",
      })
        .then(() => {
          getDoc(doc(db, "devices", id))
            .then((device) => {
              if (device.exists()) {
                const updatedDevice = device.data();
                updatedDevice.id = device.id;
                resolve(updatedDevice);
              } else {
                reject();
              }
            })
            .catch((error) => {
              thunkAPI.rejectWithValue(error.message);
            });
        })
        .catch((error) => {
          thunkAPI.rejectWithValue(error.message);
        });
    });
  }
);
