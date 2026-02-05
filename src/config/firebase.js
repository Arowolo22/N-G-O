// Basic Firebase client setup for Next.js (client-side only)
// Do NOT expose real keys in production; move them into environment variables.

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA27i6Kb4sqJ8fOh4imItwCvPXzmcoGL7A",
  authDomain: "n-g-o-8d5da.firebaseapp.com",
  projectId: "n-g-o-8d5da",
  storageBucket: "n-g-o-8d5da.firebasestorage.app",
  messagingSenderId: "255094726379",
  appId: "1:255094726379:web:9eb6317da16c6b6daf68ae",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
