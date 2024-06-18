import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./tailwind.css";

import { NextUIProvider } from '@nextui-org/react'
import { DarkModeProvider } from "./contexts/DarkModeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </NextUIProvider>
  </React.StrictMode>,
);
