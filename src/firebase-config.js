import { initializeApp } from "firebase/app";
import "dotenv/config";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

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
firebase.initializeApp(firebaseConfig);
export default firebase;
