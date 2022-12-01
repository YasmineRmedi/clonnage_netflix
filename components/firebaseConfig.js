import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBOelWReFwAcYMQ2FLKTheczYdK1XATElI",
  authDomain: "react-netflix-clone-fe4b9.firebaseapp.com",
  projectId: "react-netflix-clone-fe4b9",
  storageBucket: "react-netflix-clone-fe4b9.appspot.com",
  messagingSenderId: "236525811195",
  appId: "1:236525811195:web:84456f8de0443ed3cd875e",
  measurementId: "G-K9N5827XPQ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}
