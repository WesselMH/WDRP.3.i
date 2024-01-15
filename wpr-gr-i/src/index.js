import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById("root"));

axios.defaults.headers.common["headers"] = {
  "Access-Control-Allow-Origin": localHost,
  // "Access-Control-Allow-Origin": productionHost,
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Custom-Header",
  "Content-Type": "application/json",
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="697966601859-ijo2r23u8r05djo9o09o0qnse0peadd6.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
