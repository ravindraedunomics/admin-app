// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAX9gmKUlQibUvPz0WM6rPdSC8bDLLhtao",
    authDomain: "admin-3815c.firebaseapp.com",
    projectId: "admin-3815c",
    storageBucket: "admin-3815c.appspot.com",
    messagingSenderId: "374594726677",
    appId: "1:374594726677:web:3e3f230b8b597d68d9d71c",
    measurementId: "G-B8C2PZ9QM4"
};
firebase.initializeApp(firebaseConfig);

export default firebase;