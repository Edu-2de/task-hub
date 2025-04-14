
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDJM_XyU9C5bTImLHAsRGVaHdtgRJS2IMc",
  authDomain: "task-hub-9096e.firebaseapp.com",
  projectId: "task-hub-9096e",
  storageBucket: "task-hub-9096e.appspot.com",
  messagingSenderId: "610720886439",
  appId: "1:610720886439:web:ad2a80061644aedf3a3582",
  measurementId: "G-YR9KTW94KH"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);