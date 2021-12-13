import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDWTBwcw-2wJ0rTFp0uHxQ13gdjjj_6vLk",
  authDomain: "primeval-bot.firebaseapp.com",
  projectId: "primeval-bot",
  storageBucket: "primeval-bot.appspot.com",
  messagingSenderId: "728922210408",
  appId: "1:728922210408:web:8b0681332a2d324f0ffbdd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
