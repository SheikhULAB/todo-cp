import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyATOKiM0WyDs0AgI7HH32X8NF2Qq6WZR5I",
  authDomain: "todo-cp-f2870.firebaseapp.com",
  projectId: "todo-cp-f2870",
  storageBucket: "todo-cp-f2870.appspot.com",
  messagingSenderId: "497392712562",
  appId: "1:497392712562:web:e12ba2cfc8296d795dbbeb",
});

const db = firebaseApp.firestore();

export default db;
