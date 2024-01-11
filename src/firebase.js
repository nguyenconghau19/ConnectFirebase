// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeD529EXgb5r52URX6tWGwegzItThVuw0",
  authDomain: "learn-react-40835.firebaseapp.com",
  databaseURL: "https://learn-react-40835-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "learn-react-40835",
  storageBucket: "learn-react-40835.appspot.com",
  messagingSenderId: "241413674134",
  appId: "1:241413674134:web:fc5cf061aaa038b5e21eb7",
  measurementId: "G-P5W9B0FK2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);