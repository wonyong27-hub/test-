// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC1f6z7Y17BhNMU5_NHwpH9HtpImb9-Ozw',
  authDomain: 'wonyong--todo-backend.firebaseapp.com',
  databaseURL: 'https://wonyong--todo-backend-default-rtdb.firebaseio.com',
  projectId: 'wonyong--todo-backend',
  storageBucket: 'wonyong--todo-backend.firebasestorage.app',
  messagingSenderId: '778504554755',
  appId: '1:778504554755:web:0274c4c4712e7981018136',
  measurementId: 'G-YJ82DVRYPS',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Analytics only on client side
let analytics: ReturnType<typeof getAnalytics> | null = null
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app)
}

// Initialize Realtime Database
const database = getDatabase(app)

// Initialize Authentication
const auth = getAuth(app)

export { app, analytics, database, auth }

