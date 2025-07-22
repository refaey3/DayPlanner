// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtaaFRF1LKD2N3PlN1Aaxd5qRDdnfWM_s",
  authDomain: "dayplanner-dcf80.firebaseapp.com",
  projectId: "dayplanner-dcf80",
  storageBucket: "dayplanner-dcf80.firebasestorage.app",
  messagingSenderId: "125408024212",
  appId: "1:125408024212:web:062886a19a301b5edfc681",
  measurementId: "G-CC6LSQX9DT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
