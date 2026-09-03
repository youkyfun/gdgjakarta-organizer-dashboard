// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVk8ECyA8Lqd7KNqdnItxYUu9jdFzoohU",
  authDomain: "gdgjakarta-app.firebaseapp.com",
  projectId: "gdgjakarta-app",
  storageBucket: "gdgjakarta-app.firebasestorage.app",
  messagingSenderId: "883556294048",
  appId: "1:883556294048:web:364631a561bd411a0ed8c5",
  measurementId: "G-YK2P07NQHZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
