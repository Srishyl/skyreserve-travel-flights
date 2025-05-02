import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc7zHLp4JsgZVWxje_eaH6QXXudu0RP5s",
  authDomain: "travelsnap-81383.firebaseapp.com",
  projectId: "travelsnap-81383",
  storageBucket: "travelsnap-81383.firebasestorage.app",
  messagingSenderId: "285211834421",
  appId: "1:285211834421:web:3a245d75869f7a5e80d97c",
  measurementId: "G-TDEETTK1D5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Enable persistence for offline support
// enableIndexedDbPersistence(db).catch((err) => {
//   if (err.code === 'failed-precondition') {
//     console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
//   } else if (err.code === 'unimplemented') {
//     console.warn('The current browser does not support persistence.');
//   }
// });

export { db, auth };
