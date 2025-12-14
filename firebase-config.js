// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6BBvJxje9vx5fFRM5aNk43R5qTkAliBc",
    authDomain: "robotics-club-web.firebaseapp.com",
    projectId: "robotics-club-web",
    storageBucket: "robotics-club-web.firebasestorage.app",
    messagingSenderId: "132919739246",
    appId: "1:132919739246:web:7eeb8e04c0b84e7cc5377f",
    measurementId: "G-3WWKSTZFRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
