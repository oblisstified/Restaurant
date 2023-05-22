// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFJ0N5wetKxr9W78wORIGsGSIhEjzyPrw",
  authDomain: "restaurant-58aff.firebaseapp.com",
  projectId: "restaurant-58aff",
  storageBucket: "restaurant-58aff.appspot.com",
  messagingSenderId: "252453405591",
  appId: "1:252453405591:web:2cee8808e0a99adcacfad2",
  measurementId: "G-1ZJTK1WY2F",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// const db = getFirestore(app);

export { auth };
// export { db };
