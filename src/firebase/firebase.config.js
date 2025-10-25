// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAahJ2LNOuQDbhZHtXU7WEVPQBLWc8hY4M",
  authDomain: "plantify-52da0.firebaseapp.com",
  projectId: "plantify-52da0",
  storageBucket: "plantify-52da0.firebasestorage.app",
  messagingSenderId: "1024852050211",
  appId: "1:1024852050211:web:0fdd324ac1de467ca70c96"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
