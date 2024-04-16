// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getAnalytics } =  require("firebase/analytics");
const { getFirestore, collection, addDoc } = require("firebase/firestore");


// dotenv init
require('dotenv').config();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID
};

// Export
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the Firestore service
const db = getFirestore(firebaseApp);

module.exports = {firebaseApp, db, collection, addDoc};