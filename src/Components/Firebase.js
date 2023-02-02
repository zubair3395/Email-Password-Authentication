import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDGhEwhJxFVqhE84RVKwErxpVIixf8hW5A",
  authDomain: "signup-react-515df.firebaseapp.com",
  databaseURL: "https://signup-react-515df-default-rtdb.firebaseio.com",
  projectId: "signup-react-515df",
  storageBucket: "signup-react-515df.appspot.com",
  messagingSenderId: "503988550784",
  appId: "1:503988550784:web:16fac3efcbee6699ef7a65"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;