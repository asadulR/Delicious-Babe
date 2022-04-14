import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAs3ho3irtDtjqDklo3SkGT6OhNUbjtx-g",
  authDomain: "delicious-babe.firebaseapp.com",
  projectId: "delicious-babe",
  storageBucket: "delicious-babe.appspot.com",
  messagingSenderId: "786509369090",
  appId: "1:786509369090:web:049b3e879424166da8bc1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;