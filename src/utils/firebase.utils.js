import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAjtJxXyCHLwSjS-6siDFdOhCe_TF1VUY",
  authDomain: "crwn-clothing-384d9.firebaseapp.com",
  projectId: "crwn-clothing-384d9",
  storageBucket: "crwn-clothing-384d9.appspot.com",
  messagingSenderId: "878494761632",
  appId: "1:878494761632:web:28c07b973c31e7658abfc5",
};

// Initialize Firebase
const firebaseApppp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
