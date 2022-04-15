// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOmzFptS2JUWNbbmy1lxrkItHGYvYC45Q",
  authDomain: "red-onion-9e7ca.firebaseapp.com",
  projectId: "red-onion-9e7ca",
  storageBucket: "red-onion-9e7ca.appspot.com",
  messagingSenderId: "19335546232",
  appId: "1:19335546232:web:95ca09f8d042ea1684348d",
  /*  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId, */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
