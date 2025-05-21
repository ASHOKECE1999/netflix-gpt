// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsLcD0tYjssQaYJFYw6NG6CzoiSuX6C6Q",
  authDomain: "netflixgpt-1ad1a.firebaseapp.com",
  projectId: "netflixgpt-1ad1a",
  storageBucket: "netflixgpt-1ad1a.firebasestorage.app",
  messagingSenderId: "608477333607",
  appId: "1:608477333607:web:95bbf0547ab0e28beb2cc2"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth();