import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBjQ8laiwUZ6ArQt8vzSLs3C-kovllFB00",
  authDomain: "codeacademy-2f083.firebaseapp.com",
  projectId: "codeacademy-2f083",
  storageBucket: "codeacademy-2f083.appspot.com",
  messagingSenderId: "654481716099",
  appId: "1:654481716099:web:d632cc6fab7faa741ffcb6"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);