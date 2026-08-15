import React, { useState } from "react";
import Auth from "./auth";
import Dashboard from "./dashboard";
import Project from "./project";
import "./style.css";

type Page = "auth" | "dashboard" | "project";

export default function App() {
  const [page, setPage] = useState<Page>("auth");

  return (
    <>
      {page === "auth" && (
        <Auth onLogin={() => setPage("dashboard")} />
      )}

      {page === "dashboard" && (
        <Dashboard onOpenProject={() => setPage("project")} />
      )}

      {page === "project" && (
        <Project onBack={() => setPage("dashboard")} />
      )}
    </>
  );
}