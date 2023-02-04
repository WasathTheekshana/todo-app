// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwzlY54rXLaFnxOZ3i8KTOoAVm_ERsc7M",
  authDomain: "todo-app-yt-5f6b8.firebaseapp.com",
  projectId: "todo-app-yt-5f6b8",
  storageBucket: "todo-app-yt-5f6b8.appspot.com",
  messagingSenderId: "278055664123",
  appId: "1:278055664123:web:4a2187004d5c8b5035b35e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);