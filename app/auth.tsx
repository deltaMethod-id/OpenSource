import React, { useState } from "react";

interface AuthProps {
  onLogin: () => void;
}

export default function Auth({ onLogin }: AuthProps) {
  const [signup, setSignup] = useState(false);

  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="logo">OpenSource</div>

        <h1>{signup ? "Create account" : "Welcome back"}</h1>

        <p>
          {signup
            ? "Create your OpenSource account."
            : "Sign in to continue to OpenSource."}
        </p>

        {signup && (
          <input
            type="text"
            placeholder="Username"
            className="input"
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="input"
        />

        <input
          type="password"
          placeholder="Password"
          className="input"
        />

        <button className="primary-button" onClick={onLogin}>
          {signup ? "Create Account" : "Sign In"}
        </button>

        <button
          className="text-button"
          onClick={() => setSignup(!signup)}
        >
          {signup
            ? "Already have an account? Sign in"
            : "Don't have an account? Sign up"}
        </button>
      </div>
    </main>
  );
}