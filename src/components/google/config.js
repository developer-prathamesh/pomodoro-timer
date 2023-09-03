import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDfpjNg6u4NPOHtU-05942Az6OSnAOI4TI",
  authDomain: "pomodoro-a41eb.firebaseapp.com",
  projectId: "pomodoro-a41eb",
  storageBucket: "pomodoro-a41eb.appspot.com",
  messagingSenderId: "781226638741",
  appId: "1:781226638741:web:588cae642f064c247cca9c",
  measurementId: "G-NLEJGC1S1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {auth,provider}