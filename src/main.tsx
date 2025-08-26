import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { PortfolioProvider } from "./context/PortfolioContext";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PortfolioProvider>
      <App />
    </PortfolioProvider>
  </React.StrictMode>
);
