import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TodolistContextProvider } from "../context/todoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodolistContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TodolistContextProvider>
  </React.StrictMode>
);
