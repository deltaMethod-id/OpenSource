import React, { useState } from "react";

interface DashboardProps {
  onOpenProject: () => void;
}

export default function Dashboard({ onOpenProject }: DashboardProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="dashboard-page">
      <header className="topbar">
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className="brand">OpenSource</div>

        <button className="avatar">U</button>
      </header>

      {menuOpen && (
        <aside className="menu">
          <button onClick={onOpenProject}>＋ New Source</button>
          <button>▣ Projects</button>
          <button>⚙ Config</button>
          <button>↪ Sign Out</button>
        </aside>
      )}

      <section className="dashboard-content">
        <div>
          <p className="eyebrow">WORKSPACE</p>
          <h1>Your Projects</h1>
          <p className="muted">
            Create and manage your website source code.
          </p>
        </div>

        <button className="primary-button" onClick={onOpenProject}>
          + New Source
        </button>

        <div className="empty-project">
          <div className="empty-icon">{"</>"}</div>
          <h2>No projects yet</h2>
          <p>
            Create your first source-code project with OpenSource.
          </p>

          <button
            className="secondary-button"
            onClick={onOpenProject}
          >
            Create Project
          </button>
        </div>
      </section>
    </main>
  );
}