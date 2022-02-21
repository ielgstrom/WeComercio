import { initializeApp } from "firebase/app";
import "dotenv/config";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.API_FIREBASE_KEY,

    authDomain: process.env.API_FIREBASE_DOMAIN,

    projectId: process.env.API_FIREBASE_PROJECT,

    storageBucket: process.env.API_FIREBASE_STORAGE,

    messagingSenderId: process.env.API_FIREBASE_MESSAGING,

    appId: process.env.API_FIREBASE_APP,

    measurementId: process.env.API_FIREBASE_MEASUREMENT,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
