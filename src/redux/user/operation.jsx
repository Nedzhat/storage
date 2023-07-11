import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithPopup } from "firebase/auth";
import { auth, provider, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

export const checkUserInDB = async (email) => {
  const docRef = doc(db, "employees", email);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};

export const logIn = createAsyncThunk("user/login", async () => {
  return new Promise(async (resolve, reject) => {
    const { user } = await signInWithPopup(auth, provider);

    // проверка на пользователя компании
    const status = user.email.includes("@sirinsoftware.com");

    if (!status) {
      reject();
    }

    if (status) {
      const employee = await checkUserInDB(user.email);
      const formatingUser = {
        name: user.displayName,
        email: user.email,
        token: user.accessToken,
        id: user.uid,
        position: employee ? employee.position : "",
        projects: employee ? employee.projects : "",
      };

      resolve(formatingUser);
    }
  });
});

export const logOut = createAsyncThunk("user/logout", async () => {
  return new Promise((resolve) => {
    auth.signOut();
    resolve();
  });
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
