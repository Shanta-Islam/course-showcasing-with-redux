// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLeppMz28Ggx77xQZbzNqAxyr1Hkkrazk",
  authDomain: "teachable-fdd52.firebaseapp.com",
  projectId: "teachable-fdd52",
  storageBucket: "teachable-fdd52.appspot.com",
  messagingSenderId: "749398674115",
  appId: "1:749398674115:web:8c3c93cbba2c0697507076"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 


export const auth = getAuth(app);