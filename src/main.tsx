import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ThemeRegistry from "./components/ThemeRegistry/ThemeRegistry.tsx";
import LayoutRouter from "./Layout/Layout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeRegistry>
      <LayoutRouter />
    </ThemeRegistry>
  </React.StrictMode>
);
