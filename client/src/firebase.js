// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sajilo-5ae4f.firebaseapp.com",
  projectId: "sajilo-5ae4f",
  storageBucket: "sajilo-5ae4f.appspot.com",
  messagingSenderId: "887808123274",
  appId: "1:887808123274:web:c14e0b85ffaa7f49882873"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);