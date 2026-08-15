import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import Auth from "./auth";
import Dashboard from "./dashboard";
import Project from "./project";
import "./style.css";

type Page = "auth" | "dashboard" | "project";

function App() {
  const [page, setPage] = useState<Page>("auth");

  return (
    <>
      {page === "auth" && (
        <Auth onLogin={() => setPage("dashboard")} />
      )}

      {page === "dashboard" && (
        <Dashboard
          onOpenProject={() => setPage("project")}
        />
      )}

      {page === "project" && (
        <Project onBack={() => setPage("dashboard")} />
      )}
    </>
  );
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
