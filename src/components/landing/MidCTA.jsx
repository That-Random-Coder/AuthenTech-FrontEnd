// src/components/landing/MidCTA.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/landing.scss";

export default function MidCTA() {
  return (
    <section className="landing-section" aria-labelledby="mid-cta">
      <div className="landing-grid">
        <div />
        <div className="c-content">
          <div className="section-card mid-cta" role="region" aria-label="Call to action">
            <h2 id="mid-cta" className="section-title">Ready to secure attendance?</h2>
            <p className="section-sub">Sign up free and start running proxy-proof attendance sessions in minutes.</p>
            <div style={{ marginTop: 8 }}>
              <Link to="/register" className="btn btn-primary">Get started — free</Link>
              <Link to="/about" className="btn btn-outline">Read the plan</Link>
            </div>
          </div>
        </div>
        <div />
      </div>
    </section>
  );
}
