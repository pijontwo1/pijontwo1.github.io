// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABsnDKD-FRwmB6muRTN-i4NsMt8kDOq3o",
  authDomain: "ydconnect.firebaseapp.com",
  projectId: "ydconnect",
  storageBucket: "ydconnect.appspot.com",
  messagingSenderId: "728145388139",
  appId: "1:728145388139:web:ce90cb43776a19012b072e",
  measurementId: "G-98DE37L77Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);