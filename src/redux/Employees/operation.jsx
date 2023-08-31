import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export const fetchEmployees = createAsyncThunk(
  "employees/fetchAll",
  async (_, thunkAPI) => {
    try {
      let employees = [];
      const querySnapshot = await getDocs(collection(db, "employees"));
      querySnapshot.forEach((doc) => {
        const res = doc.data();
        res.id = doc.id;
        employees.push(res);
      });
      return employees;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
