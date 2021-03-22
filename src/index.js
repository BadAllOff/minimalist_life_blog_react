import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirebaseContext } from "./context/firebase";
import "normalize.css";
import GlobalStyle from "./globalStyles";

const firebaseConfig = {
  apiKey: "AIzaSyB6OliQt7LPTSqal6roCIbNO3BMlaQavhM",
  authDomain: "minimalist-blog-3b83c.firebaseapp.com",
  projectId: "minimalist-blog-3b83c",
  storageBucket: "minimalist-blog-3b83c.appspot.com",
  messagingSenderId: "499935107396",
  appId: "1:499935107396:web:2593db37b80a4c3a941f11",
  measurementId: "G-QVMS8ZPQXL",
};

// Initialize Firebase
window.firebase.initializeApp(firebaseConfig);
window.firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyle />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
