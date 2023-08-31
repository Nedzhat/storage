import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithPopup } from "firebase/auth";
import { auth, provider, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export const checkUserInDB = async (email) => {
  const docRef = doc(db, "employees", email);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};

export const logIn = createAsyncThunk("user/login", async (_, thunkAPI) => {
  try {
    const { user } = await signInWithPopup(auth, provider);
    const status = user.email.includes("@sirinsoftware.com");
    if (!status) {
      Notify.failure(`Unknow email!`);
      throw new Error("Unknow email!");
    }

    if (status) {
      const employee = await checkUserInDB(user.email);
      console.log(employee);
      const formatingUser = {
        name: user.displayName,
        email: user.email,
        token: user.accessToken,
        id: user.uid,
        position: employee ? employee.position : "",
        projects: employee ? employee.projects : "",
      };

      return formatingUser;
    }
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk("user/logout", async () => {
  try {
    return auth.signOut();
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "user/refresh",
  async (_, { rejectWithValue }) => {
    try {
      const user = await new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(
          (user) => {
            if (user) {
              // проверка на пользователя компании
              const status = user.email.includes("@sirinsoftware.com");
              if (!status) {
                Notify.failure(`Unknow email!`);
                reject();
              }
            }

            if (user) {
              resolve(user);
            } else {
              reject();
            }
          },
          (error) => {
            unsubscribe();
            console.log(error.message);
            reject(error);
          }
        );
      });

      const employee = await checkUserInDB(user.email);

      const formatingUser = {
        name: user.displayName,
        email: user.email,
        token: user.accessToken,
        id: user.uid,
        position: employee.position ? employee.position : "",
        projects: employee.projects ? employee.projects : "",
      };

      return formatingUser;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error);
    }
  }
);
