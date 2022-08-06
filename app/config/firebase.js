// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_uV5cWPL4F0TYDU94yfApE4xIhB59vY0",
  authDomain: "clic-app-6ad45.firebaseapp.com",
  projectId: "clic-app-6ad45",
  storageBucket: "clic-app-6ad45.appspot.com",
  messagingSenderId: "914070390860",
  appId: "1:914070390860:web:4aa1b1d0d1bcac09518ce9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);