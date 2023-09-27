import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
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
        const res = doc.data();
        res.id = doc.id;
        workplaces.push(res);
      });
      return workplaces;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWorkplaceRemote = createAsyncThunk(
  "workplaceRemote/add",
  async (wp, thunkAPI) => {
    try {
      const ref = await addDoc(
        collection(db, "workplace", "remote", "remote"),
        wp
      );
      const wpDoc = await getDoc(
        doc(db, "workplace", "remote", "remote", ref.id)
      );

      if (wpDoc.exists()) {
        const formattingWp = wpDoc.data();
        formattingWp.id = wpDoc.id;
        return formattingWp;
      } else {
        throw new Error("Document not found");
      }
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeStatusWorkplace = createAsyncThunk(
  "workplace/status",
  async (wp, thunkAPI) => {
    try {
      const { employee, employee_email, status, name } = wp;

      const ref = await updateDoc(
        doc(db, "workplace", "headoffice", "6.3", name),
        {
          employee,
          employee_email,
          status,
        }
      );
      const wpDoc = await getDoc(
        doc(db, "workplace", "headoffice", "6.3", name)
      );
      if (wpDoc.exists()) {
        return wpDoc.data();
      } else {
        throw new Error("Document not found");
      }
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
