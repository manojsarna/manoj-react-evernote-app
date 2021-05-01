import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase";
import "firebase/firestore";


// const firebase = require('firebase')
// require('firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBFhGVcoD2kqVcim4V39E0GavwrWr7bX_M",
  authDomain: "manoj-evernote.firebaseapp.com",
  projectId: "manoj-evernote",
  storageBucket: "manoj-evernote.appspot.com",
  messagingSenderId: "440914336753",
  appId: "1:440914336753:web:5e32021329173710dec250"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

