import React, { useRef, useState } from "react";

interface ProjectProps {
  onBack: () => void;
}

export default function Project({ onBack }: ProjectProps) {
  const [code, setCode] = useState(
    `<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1>Hello, OpenSource!</h1>
  </body>
</html>`
  );

  const [fileName, setFileName] = useState("index.html");
  const fileInput = useRef<HTMLInputElement>(null);

  return (
    <main className="project-page">
      <header className="editor-topbar">
        <button className="menu-button" onClick={onBack}>
          ←
        </button>

        <div className="brand">OpenSource</div>

        <div className="project-name">My Website</div>

        <button className="secondary-button">Save</button>
      </header>

      <div className="editor-layout">
        <aside className="file-panel">
          <div className="panel-title">FILES</div>

          <button
            className={`file-item ${
              fileName === "index.html" ? "active" : ""
            }`}
            onClick={() => setFileName("index.html")}
          >
            📄 index.html
          </button>

          <button
            className={`file-item ${
              fileName === ".env" ? "active" : ""
            }`}
            onClick={() => setFileName(".env")}
          >
            📄 .env
          </button>

          <button className="file-item">📄 .gitignore</button>
          <button className="file-item">📄 package.json</button>

          <div className="file-actions">
            <button
              onClick={() => fileInput.current?.click()}
            >
              Import ZIP
            </button>

            <input
              ref={fileInput}
              type="file"
              accept=".zip"
              hidden
            />

            <button>Export ZIP</button>
          </div>
        </aside>

        <section className="code-panel">
          <div className="editor-tab">{fileName}</div>

          <textarea
            className="code-editor"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            spellCheck={false}
          />
        </section>

        <section className="preview-panel">
          <div className="panel-title">PREVIEW</div>

          <div className="preview-content">
            <h1>Hello, OpenSource!</h1>
            <p>Website preview</p>
          </div>
        </section>
      </div>
    </main>
  );
}