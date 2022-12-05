// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPXnSFHfX2VDvc6Hz9TqoXDUufjqj-UuI",
  authDomain: "noteme-b36d4.firebaseapp.com",
  projectId: "noteme-b36d4",
  storageBucket: "noteme-b36d4.appspot.com",
  messagingSenderId: "566595849589",
  appId: "1:566595849589:web:2e380fb9dff20a598f973c",
  measurementId: "G-TKP244BH24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

export default db;
