// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4pt3HyMUsg_bqvWAJVbrR5VtMiTS-sfw",
  authDomain: "rate-alert-application.firebaseapp.com",
  projectId: "rate-alert-application",
  storageBucket: "rate-alert-application.appspot.com",
  messagingSenderId: "639418890145",
  appId: "1:639418890145:web:01fdb183cd736f211a7de0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
