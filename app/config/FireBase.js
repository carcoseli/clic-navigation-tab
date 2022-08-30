import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHqlZ8CgfbYSiiuuGjw7Ljt891quEqjBQ",
  authDomain: "click-app-ca38b.firebaseapp.com",
  projectId: "click-app-ca38b",
  storageBucket: "click-app-ca38b.appspot.com",
  messagingSenderId: "1077804580262",
  appId: "1:1077804580262:web:07e9a26bfc0bbcc14ea367"
};

const app = initializeApp(firebaseConfig);
export default firebaseConfig;
export const authentication =getAuth(app);
export const db =getFirestore(app);