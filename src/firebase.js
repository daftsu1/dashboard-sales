import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnAcnK7MnvHRR65EuYj9z7JnvqPmXAxp8",
  authDomain: "holospet.firebaseapp.com",
  databaseURL: "https://holospet-default-rtdb.firebaseio.com",
  projectId: "holospet",
  storageBucket: "holospet.appspot.com",
  messagingSenderId: "109179859362",
  appId: "1:109179859362:web:cf465cda1585d3cc6802fb",
  measurementId: "G-J970VEYDMG"
};


const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default database;