import { signInWithPopup } from "firebase/auth";
import { auth, provider, db } from "../../firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";

export const checkUserInDB = async (email) => {
  const docRef = doc(db, "employees", email);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};

// export const checkUserInDB = createAsyncThunk("user/checkdb", async (email) => {
//   return new Promise(async (resolve, reject) => {
//     const docRef = doc(db, "employees", email);
//     const docSnap = await getDoc(docRef);
//     console.log(email);
//     if (docSnap.exists()) {
//       console.log("Document data:", docSnap.data());
//       resolve(docSnap.data());
//     } else {
//       console.log("No such document!");
//       reject();
//     }
//   });
// });

export const logIn = createAsyncThunk("user/login", async () => {
  return new Promise(async (resolve, reject) => {
    const { user } = await signInWithPopup(auth, provider);

    // проверка на пользователя компании
    const status = user.email.includes("@sirinsoftware.com");

    if (status) {
      const res = await checkUserInDB(user.email);

      const formatingUser = {
        name: user.displayName,
        email: user.email,
        token: user.accessToken,
        id: user.uid,
        equipment: res.equipment ? res.equipment : "",
        position: res.position ? res.position : "",
        projects: res.projects ? res.projects : "",
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
