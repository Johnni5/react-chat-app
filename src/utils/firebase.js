import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD8Sn8GP9ut3z9aREvYggFW-ZkDclqY9k4",
  authDomain: "epicchat-c9692.firebaseapp.com",
  projectId: "epicchat-c9692",
  storageBucket: "epicchat-c9692.appspot.com",
  messagingSenderId: "664937946849",
  appId: "1:664937946849:web:0b26ed6dfb4f25ea6ca1a0"
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

