// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: "realestate-c29ea.firebaseapp.com",
  projectId: "realestate-c29ea",
  storageBucket: "realestate-c29ea.appspot.com",
  messagingSenderId: "594447212781",
  appId: "1:594447212781:web:3627e13ae76cb7274aece4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);