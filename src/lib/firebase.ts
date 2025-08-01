// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const firebaseConfig2 = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY_2,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN_2,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID_2,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET_2,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID_2,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID_2,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID_2,
};

// Initialize Firebase
const app = getApps().find(app => app.name === '[DEFAULT]')
? getApp()
: initializeApp(firebaseConfig);
const db = getFirestore(app, "freemoviedownload");

const app2 = getApps().find(app => app.name === 'secondApp')
? getApp('secondApp')
: initializeApp(firebaseConfig2, 'secondApp');
const db2 = getFirestore(app2);

export { app, db, app2, db2 };
