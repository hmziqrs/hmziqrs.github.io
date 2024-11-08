// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

export const initFirebase = async () => {
  try {
    const app = initializeApp(firebaseConfig);
    const analyticsSupported = await isSupported();

    if (analyticsSupported) {
      const analytics = getAnalytics(app);
      return { app, analytics };
    }

    return { app, analytics: null };
  } catch (error) {
    console.error("Firebase initialization error:", error);
    return { app: null, analytics: null };
  }
};
