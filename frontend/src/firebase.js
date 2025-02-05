// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app"
import {GoogleAuthProvider, getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "email-authentication-92430.firebaseapp.com",
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: "email-authentication-92430.firebasestorage.app",
  messagingSenderId: "682849180066",
  appId: import.meta.env.VITE_APP_ID,
  measurementId: "G-W702B67P26"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth , provider}
