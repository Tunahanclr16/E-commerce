// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAaJNj5DELKoB3sp3LDK6Q2GKCghZ97ZU",
  authDomain: "e-co-b3aec.firebaseapp.com",
  projectId: "e-co-b3aec",
  storageBucket: "e-co-b3aec.appspot.com",
  messagingSenderId: "523731280186",
  appId: "1:523731280186:web:d6f5d1291cb385e8b6b003",
  measurementId: "G-5LJJK0ZDWK"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);