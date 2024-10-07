// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrQ5c8zR0StofT5kjkW6QJmMG6ZqkrwpM",
  authDomain: "login-eadae.firebaseapp.com",
  projectId: "login-eadae",
  storageBucket: "login-eadae.appspot.com",
  messagingSenderId: "673565974185",
  appId: "1:673565974185:web:3e052f7145d364f8b5d3b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app)
export default app;
