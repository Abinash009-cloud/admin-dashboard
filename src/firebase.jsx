// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "your API key................",
  authDomain: "yourapp.firebaseapp.com",
  projectId: "ecommerce-admin-dashboar-92eefyourapp",
  storageBucket: "yourapp.appspot.com",
  messagingSenderId: "xxxxxxx",
  appId: "xxxxxxxxx"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
