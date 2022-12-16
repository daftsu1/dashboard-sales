import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyBnAcnK7MnvHRR65EuYj9z7JnvqPmXAxp8",
    authDomain: "holospet.firebaseapp.com",
    databaseURL: "https://holospet-default-rtdb.firebaseio.com",
    projectId: "holospet",
    storageBucket: "holospet.appspot.com",
    messagingSenderId: "109179859362",
    appId: "1:109179859362:web:cf465cda1585d3cc6802fb",
    measurementId: "G-J970VEYDMG"
  };
  

firebase.initializeApp(config);

export default firebase.database();