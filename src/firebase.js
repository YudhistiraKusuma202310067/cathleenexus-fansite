// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // ✅ Firestore
import { getAuth } from "firebase/auth"; // optional (for login)
import { getStorage } from "firebase/storage"; // optional (for uploads)

// 🔥 Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYPahY0rA7LYQEIgNKNDDuBw60rfZsuyU",
  authDomain: "nexus-web-bc725.firebaseapp.com",
  projectId: "nexus-web-bc725",
  storageBucket: "nexus-web-bc725.firebasestorage.app",
  messagingSenderId: "664288166369",
  appId: "1:664288166369:web:87cbe20c3083530b0c52a0",
  measurementId: "G-WW3PCDX4Y7"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional analytics (only works in browser)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// ✅ Initialize and export Firestore
export const db = getFirestore(app);

// Optional — export others if you need them later
export const auth = getAuth(app);
export const storage = getStorage(app);
export { analytics };
