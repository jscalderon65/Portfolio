import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyD8FvyJKPX-VqQgEDx_mxchzMShfoFDAbg",
  authDomain: "portfolio-1f2e9.firebaseapp.com",
  databaseURL: "https://portfolio-1f2e9-default-rtdb.firebaseio.com",
  projectId: "portfolio-1f2e9",
  storageBucket: "portfolio-1f2e9.appspot.com",
  messagingSenderId: "962989852779",
  appId: "1:962989852779:web:1de67b8015b0d0361f092e",
  measurementId: "G-P68W5LFXBG",
});

const db = firebase.firestore();
export { db, firebase };
