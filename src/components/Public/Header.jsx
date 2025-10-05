// src/components/Public/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/public.scss";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="public-header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          AuthenTech
        </Link>

        <nav className={`site-nav ${open ? "open" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link to="/login" className="btn btn-ghost" onClick={() => setOpen(false)}>Login</Link>
          <Link to="/register" className="btn btn-primary" onClick={() => setOpen(false)}>Register</Link>
        </nav>

        <button
          aria-label="Toggle navigation"
          className="nav-toggle"
          onClick={() => setOpen((s) => !s)}
        >
          <span className="hamburger" />
        </button>
      </div>
    </header>
  );
}
