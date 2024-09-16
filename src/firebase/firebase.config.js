// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtbomXZQ--3dzh5H2OTSwzCCmRxyH8Ve0",
  authDomain: "private-router-62462.firebaseapp.com",
  projectId: "private-router-62462",
  storageBucket: "private-router-62462.appspot.com",
  messagingSenderId: "395561301497",
  appId: "1:395561301497:web:8f86ffb02d2f5f3bef3928",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
