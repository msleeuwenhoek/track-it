import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: "JUST THE EXAMPLE",
  // authDomain: "JUST THE EXAMPLE",
  // projectId: "JUST THE EXAMPLE",
  // storageBucket: "JUST THE EXAMPLE",
  // messagingSenderId: "JUST THE EXAMPLE",
  // appId: "JUST THE EXAMPLE",
  // measurementId: "JUST THE EXAMPLE",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);
export { app, database, auth };
