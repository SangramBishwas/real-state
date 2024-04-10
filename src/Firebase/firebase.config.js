// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZxeE15fJvCC0XlN1pk3CwSFYEIwSSnZc",
  authDomain: "assignment-09-1b2f0.firebaseapp.com",
  projectId: "assignment-09-1b2f0",
  storageBucket: "assignment-09-1b2f0.appspot.com",
  messagingSenderId: "788913808060",
  appId: "1:788913808060:web:26075c1fc0adc4a82566b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;