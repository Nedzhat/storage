import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDoc,
  setDoc,
  addDoc,
  doc,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

// Initialize app

const app = initializeApp(firebaseConfig);

// Authentication

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  hd: "sirinsoftware.com",
});

// Database

const db = getFirestore(app);

// References from database

const queryEmployees = query(collection(db, "employees"));
const queryDevices = query(collection(db, "devices"));
// const specificRef = doc(db, "employees", "koko@use.com");

// Methods for database

const addEmployee = async (user) => {
  const { name, email, projects, equipment, position } = user;
  const resEmployee = await setDoc(doc(employeesRef, email), {
    name,
    email,
    projects,
    equipment,
    position,
  });
  return resEmployee;
};

const addDevice = async (device) => {
  const { name, info, project, employee, location, sn, status, type } = device;
  if (sn) {
    return;
  }
  const resDevice = await addDoc(devicesRef, {
    name,
    info,
    project,
    employee,
    location,
    sn,
    status,
    type,
  });
  return resDevice;
};

// exports

export { auth, provider, db };
