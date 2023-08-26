import { ThemeProvider } from "@/components/theme-provider.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { ProfileForm } from "./profile-forms.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/form",
    element: <ProfileForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="linkBoss-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
