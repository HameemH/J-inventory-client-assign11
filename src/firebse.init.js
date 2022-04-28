// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9DkUoYlDAbGStaGbgNr8_MDsva9emLVU",
  authDomain: "assignment11-3ec5e.firebaseapp.com",
  projectId: "assignment11-3ec5e",
  storageBucket: "assignment11-3ec5e.appspot.com",
  messagingSenderId: "568952522913",
  appId: "1:568952522913:web:c5ff2b328088c35460c8e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
