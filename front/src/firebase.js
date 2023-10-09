// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "househunt-2f716.firebaseapp.com",
  projectId: "househunt-2f716",
  storageBucket: "househunt-2f716.appspot.com",
  messagingSenderId: "913954030258",
  appId: "1:913954030258:web:50e38771aeb0dd088effab",
  measurementId: "G-X5XGSBH8D6"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const app = initializeApp(firebaseConfig);