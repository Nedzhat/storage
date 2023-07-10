import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export const fetchEmployees = createAsyncThunk(
  "employees/fetchAll",
  async (_, thunkAPI) => {
    return new Promise(async (resolve) => {
      try {
        let employees = [];
        const querySnapshot = await getDocs(collection(db, "employees"));
        querySnapshot.forEach((doc) => {
          const res = doc.data();
          res.id = doc.id;
          employees.push(res);
        });
        return resolve(employees);
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    });
  }
);
