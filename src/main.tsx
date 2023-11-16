import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ThemeRegistry from "./components/ThemeRegistry/ThemeRegistry.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeRegistry>
      <App />
    </ThemeRegistry>
  </React.StrictMode>
);
