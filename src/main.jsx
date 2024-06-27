import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./tailwind.css";

import { NextUIProvider } from "@nextui-org/react";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { StudyResourcesProvider } from "./contexts/StudyResourceContext.jsx";
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <DarkModeProvider>
        <StudyResourcesProvider>
          <App />
          <Toaster
            toastOptions={{
              style: {
              },
              className: 'text-red-500 rounded-lg shadow-lg !px-4 !py-2 text-sm font-medium !dark:bg-slate-700 !dark:text-gray-200 !bg-white !text-gray-800',
            }}
          />
        </StudyResourcesProvider>
      </DarkModeProvider>
    </NextUIProvider>
  </React.StrictMode>,
);
