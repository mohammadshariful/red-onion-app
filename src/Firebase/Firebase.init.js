// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBN0eVDSJRbR0thgRBQIqeh5DOm_mUCE1s",
  authDomain: "red-onion-c3090.firebaseapp.com",
  projectId: "red-onion-c3090",
  storageBucket: "red-onion-c3090.appspot.com",
  messagingSenderId: "383066996035",
  appId: "1:383066996035:web:c87a49cdec28a6016143f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
