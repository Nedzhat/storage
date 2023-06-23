import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const logIn = createAsyncThunk("user/login", async () => {
  return new Promise(async (resolve, reject) => {
    const { user } = await signInWithPopup(auth, provider);

    const status = user.email.includes("@sirinsoftware.com");

    if (status) {
      const formatingUser = {
        name: user.displayName,
        email: user.email,
        token: user.accessToken,
        id: user.uid,
      };
      resolve(formatingUser);
    }

    if (!status) {
      reject();
    }
  });
});

export const logOut = createAsyncThunk("user/logout", async () => {
  return new Promise((resolve) => {
    console.log("logout");
    auth.signOut();
    resolve();
  });
});

export const refreshUser = createAsyncThunk("user/refresh", async () => {
  return new Promise((resolve, reject) => {
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
          const formatingUser = {
            name: user.displayName,
            email: user.email,
            token: user.accessToken,
          };
          unsubscribe(); // отписка от слушателя
          resolve(formatingUser);
        }
        if (!user) {
          reject();
        }
      },
      (error) => {
        unsubscribe();
        reject(error);
      }
    );
  });
});
