import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
 
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

