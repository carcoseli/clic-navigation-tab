// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-lJOwevWDkSy9UNRlkO9bCYxBW8JUauw",
  authDomain: "clic-app-3e0d8.firebaseapp.com",
  projectId: "clic-app-3e0d8",
  storageBucket: "clic-app-3e0d8.appspot.com",
  messagingSenderId: "709321168846",
  appId: "1:709321168846:web:9c4a5249b96f6695473d9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db=getFirestore(app);
