// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD7yoEqCgNqY3EJbmXZmHQDbjJDgxAS048",
  authDomain: "dkenya001-8ec92.firebaseapp.com",
  projectId: "dkenya001-8ec92",
  storageBucket: "dkenya001-8ec92.appspot.app",
  messagingSenderId: "1038212418298",
  appId: "1:1038212418298:web:7d28e085d398458d045743",
  measurementId: "G-87YB16QDYW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default {app, auth};