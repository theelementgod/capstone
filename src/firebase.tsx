// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "dmhelper-1a45d.firebaseapp.com",
  projectId: "dmhelper-1a45d",
  storageBucket: "dmhelper-1a45d.appspot.com",
  messagingSenderId: "393965848186",
  appId: import.meta.env.VITE_APP_ID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)