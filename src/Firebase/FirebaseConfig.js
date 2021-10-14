import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import env from "react-dotenv";
firebase.initializeApp({
  apiKey: env.API_KEY,
  authDomain: env.AUTH_DOMAIN,
  databaseURL: env.DATABASE_URL,
  projectId: env.PROJECT_ID,
  storageBucket: env.STORAGE_BUCKET,
  messagingSenderId: env.MESSAGING_SENDER_ID,
  appId: env.APP_ID,
  measurementId: env.MEASUREMENT_ID,
});

const db = firebase.firestore();
export { db, firebase };
