import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";
import { AuthProvider } from './context/AuthContext';
import { preloadTestUsers } from './services/mockAuthService';

preloadTestUsers();

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
      <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
