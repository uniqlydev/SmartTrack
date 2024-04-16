// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8apxNby_a7RsjLOgyrF2t2mttizYGOYc",
  authDomain: "nutrisync-aa6d2.firebaseapp.com",
  projectId: "nutrisync-aa6d2",
  storageBucket: "nutrisync-aa6d2.appspot.com",
  messagingSenderId: "978012364283",
  appId: "1:978012364283:web:61271cbac4710d404bff5e",
  measurementId: "G-JE1SF02XQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);