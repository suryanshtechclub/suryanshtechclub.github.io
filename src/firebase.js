// Change these values to your own from Firebase Console
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOmYyPYwPkWw4eD9VknzkaPGB735PCjnU",
  authDomain: "suryanshtechclub-7f839.firebaseapp.com",
  projectId: "suryanshtechclub-7f839",
  storageBucket: "suryanshtechclub-7f839.firebasestorage.app",
  messagingSenderId: "907249251165",
  appId: "1:907249251165:web:719eea15be1cca5716aeb4",
  measurementId: "G-M79KZJQRY6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
