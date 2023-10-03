import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0cf5yoLZNqpChhcTerveFCnh9jpKYEdo",
  authDomain: "e-clone-7e5a1.firebaseapp.com",
  projectId: "e-clone-7e5a1",
  storageBucket: "e-clone-7e5a1.appspot.com",
  messagingSenderId: "99881660681",
  appId: "1:99881660681:web:8a717d2ed372b918f463d8",
  measurementId: "G-DQCRN7J1X9",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { db, auth };
