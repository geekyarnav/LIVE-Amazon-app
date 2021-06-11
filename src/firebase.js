import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBaIlFfpQ08KnOY4tZMDh794jo6digW9ZU",
  authDomain: "arnav-13a73.firebaseapp.com",
  projectId: "arnav-13a73",
  storageBucket: "arnav-13a73.appspot.com",
  messagingSenderId: "1001394728533",
  appId: "1:1001394728533:web:b6962b9ea380501c23eedc",
  measurementId: "G-GW3WRVYKG6"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};


  