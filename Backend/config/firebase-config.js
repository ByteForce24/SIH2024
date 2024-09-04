// firebaseConfig.js
const { initializeApp } = require('firebase/app');
const { getDatabase } = require('firebase/database');

const firebaseConfig = {
  apiKey: "AIzaSyBEydm1UoT-WEvX5J8OjnFiIwCjK5cq30Xs",
  authDomain: "rajasthanalumniconnect.firebaseapp.com",
  databaseURL: "https://rajasthanalumniconnect-default-rtdb.firebaseio.com",
  projectId: "rajasthanalumniconnect",
  storageBucket: "rajasthanalumniconnect.appspot.com",
  messagingSenderId: "481259243338",
  appId: "1:481259243338:web:1f090d0fc8f271b17723b3",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
console.log('Firebase initialized successfully');
module.exports = database;
