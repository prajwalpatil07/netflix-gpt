// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN-7kPliQVQwYDAF1M7cmL1luX_7yILyg",
  authDomain: "netflixgpt-4e671.firebaseapp.com",
  projectId: "netflixgpt-4e671",
  storageBucket: "netflixgpt-4e671.appspot.com",
  messagingSenderId: "786156273059",
  appId: "1:786156273059:web:90fbb3fc50d56491b0ae16",
  measurementId: "G-LF282ZL614"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
