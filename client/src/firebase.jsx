// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: import.meta.env.AUTH_DOMAIN,
  projectId: import.meta.env.PROJECT_ID,
  storageBucket:"realestatepf.appspot.com",
  messagingSenderId: import.meta.env.MESSAGING_SENDER,
  appId: import.meta.env.APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);