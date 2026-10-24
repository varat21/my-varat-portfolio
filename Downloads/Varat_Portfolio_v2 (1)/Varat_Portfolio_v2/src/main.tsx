import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Self-hosted variable fonts (no render-blocking third-party request).
import "@fontsource-variable/inter";
import "@fontsource-variable/plus-jakarta-sans";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
