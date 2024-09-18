import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCEHG0HhpxkEIGf6gEjcukxXti7ClzT6hw",
  authDomain: "epic-chat-72da8.firebaseapp.com",
  projectId: "epic-chat-72da8",
  storageBucket: "epic-chat-72da8.appspot.com",
  messagingSenderId: "286019934051",
  appId: "1:286019934051:web:6b30518453ae87bedea556"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

const auth = getAuth(app);

const storage = getStorage(app);

const provider = new GoogleAuthProvider();


export { db, auth, provider, storage };

