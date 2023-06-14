import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import App from "./App.jsx";
import Theme from "./Configs/Theme";
import "./Index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);