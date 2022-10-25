import { initializeApp } from "firebase/app";


//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8PhGdz1JQKnBmyun8kCfxWW784lj2zds",
  authDomain: "codeacademy-2amrx.firebaseapp.com",
  projectId: "codeacademy-2amrx",
  storageBucket: "codeacademy-2amrx.appspot.com",
  messagingSenderId: "325233291855",
  appId: "1:325233291855:web:caf45f7aaddcc6b40c303a"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);