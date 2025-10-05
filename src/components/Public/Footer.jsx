// src/components/Public/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/public.scss";

export default function Footer() {
  return (
    <footer className="public-footer">
      <div className="container footer-inner">
        <div className="brand-col">
          <div className="brand">AuthenTech</div>
          <div className="small">Proxy-proof attendance for institutions — zero cost model</div>
        </div>

        <div className="links-col">
          <Link to="/about">About</Link>
          <a href="mailto:hello@authentech.example">hello@authentech.example</a>
          <span className="copyright">© {new Date().getFullYear()} AuthenTech</span>
        </div>
      </div>
    </footer>
  );
}
