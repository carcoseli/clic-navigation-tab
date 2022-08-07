import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDmsk_Unw0SdARHMygpUHtlyHBae3Fqc2g",
  authDomain: "click-app-a0a54.firebaseapp.com",
  projectId: "click-app-a0a54",
  storageBucket: "click-app-a0a54.appspot.com",
  messagingSenderId: "751828971762",
  appId: "1:751828971762:web:1effc6bb476c284d80e06b"
};

const app = initializeApp(firebaseConfig);
export const autentication=getAuth(app)