import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBYYL0yx9T7M5v9L5ZoQjWVBj-cJJwMCi4",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "birbir-town-khc-bible-school.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "birbir-town-khc-bible-school",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "birbir-town-khc-bible-school.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1056057220752",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1056057220752:web:1c6caf86b0e1bdc34b4215"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
