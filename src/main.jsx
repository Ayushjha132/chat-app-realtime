import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyALFCMgXQ50DKLOQ0q35L2Rh0RWjVF8gjo",
  authDomain: "realtime-chat-applicatio-3e4b0.firebaseapp.com",
  databaseURL: "https://realtime-chat-applicatio-3e4b0-default-rtdb.firebaseio.com",
  projectId: "realtime-chat-applicatio-3e4b0",
  storageBucket: "realtime-chat-applicatio-3e4b0.appspot.com",
  messagingSenderId: "400479568941",
  appId: "1:400479568941:web:ad785f8c9ad935fe3ae4a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
 
    <App />
 

  
)
