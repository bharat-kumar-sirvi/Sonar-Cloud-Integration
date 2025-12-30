import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Secret } from "./Secret.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App flag={true} />
    <Secret />
  </StrictMode>
);
