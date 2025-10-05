// src/components/landing/HowItWorks.jsx
import React from "react";
import "../../styles/landing.scss";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  return (
    <section className="landing-section" aria-labelledby="howitworks">
      <div className="landing-grid">
        <div className="c-content">
          <div className="section-card" role="region" aria-label="How AuthenTech Works">
            <h2 id="howitworks" className="section-title">How AuthenTech Works</h2>
            <p className="section-sub">
              A concise 3-step flow derived from the AuthenTech plan: dynamic tokens,
              multi-source verification, and device binding create an atomic, proxy-proof check-in flow.
            </p>

            <div className="steps-grid" aria-hidden={false}>
              <div className="step">
                <div className="step-num">1</div>
                <h4>Teacher starts a session</h4>
                <p>Generates a short-lived, single-use token (15–30s) rendered as a QR code.</p>
              </div>

              <div className="step">
                <div className="step-num">2</div>
                <h4>Student scans</h4>
                <p>The student app scans the ephemeral token and posts it with multi-source location data and a device signature.</p>
              </div>

              <div className="step">
                <div className="step-num">3</div>
                <h4>Atomic verification</h4>
                <p>The Attendance Service runs the sequential checks (auth, device binding, token, location, attestation) before recording PRESENCE.</p>
              </div>
            </div>

            <div style={{ marginTop: 18 }}>
              <Link to="/about" className="btn btn-outline">Read the architecture</Link>
              <Link to="/register" className="btn btn-primary">Try it free</Link>
            </div>
          </div>
        </div>

        {/* center column intentionally left empty so background QR can peek through */}
        <div className="center-empty" />

        {/* right column intentionally empty */}
        <div />
      </div>
    </section>
  );
}
