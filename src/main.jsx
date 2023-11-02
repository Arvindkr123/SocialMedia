import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkModeProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </DarkModeProvider>
);
