// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth } from 'firebase/auth';
import { getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjpOkXRKWI61bEhN_NhY64q-v6b9CLfhk",
  authDomain: "offer-uz.firebaseapp.com",
  projectId: "offer-uz",
  storageBucket: "offer-uz.appspot.com",
  messagingSenderId: "788177386860",
  appId: "1:788177386860:web:78a61c924ee81d622a0749",
  measurementId: "G-YZNT7QSVPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app,{
  persistence:getReactNativePersistence(AsyncStorage)
})
const analytics = getAnalytics(app);
export default app;