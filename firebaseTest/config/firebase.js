// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs7iFcMVDYrP7RxO_27PMexMCwBsJd9DA",
  authDomain: "login-firebase---3agb---c9130.firebaseapp.com",
  projectId: "login-firebase---3agb---c9130",
  storageBucket: "login-firebase---3agb---c9130.firebasestorage.app",
  messagingSenderId: "987769403026",
  appId: "1:987769403026:web:9232a1b8bbf2ee86da984b",
  measurementId: "G-0W4GS4T9L0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);