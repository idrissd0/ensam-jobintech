// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaqBWa9Poo9p4rABRBo4y2QsP0tpqwK-Y",
  authDomain: "ensamjobintech.firebaseapp.com",
  projectId: "ensamjobintech",
  storageBucket: "ensamjobintech.appspot.com",
  messagingSenderId: "294272517796",
  appId: "1:294272517796:web:2a24a358b74fe6fee5c831"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);