
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE,
  authDomain:import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket:"realestatepf.appspot.com",
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER,
  appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);