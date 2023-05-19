import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ArProvider from "./components/ArProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ArProvider>
      <App tab="home" />
    </ArProvider>
  </React.StrictMode>
);
