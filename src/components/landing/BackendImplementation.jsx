// src/components/landing/BackendImplementation.jsx
import React from "react";
import "../../styles/landing.scss";

export default function BackendImplementation() {
  return (
    <section className="landing-section" aria-labelledby="backend">
      <div className="landing-grid">
        <div />
        <div className="c-content">
          <div className="section-card" role="region" aria-label="backend">
            <h2 id="backend" className="section-title">Backend: Spring Boot Microservices</h2>
            <p className="section-sub">A focused blueprint that maps to the microservices and endpoints required by the plan.</p>

            <h4 style={{ marginTop: 8 }}>Key endpoints</h4>
            <ul style={{ color: "#455b76" }}>
              <li><code>POST /auth/login</code> — issue JWT</li>
              <li><code>POST /sessions/start</code> — create session & generate ephemeral token (teacher only)</li>
              <li><code>POST /attendance/mark</code> — student submits ephemeral token + location + device signature</li>
            </ul>

            <h4 style={{ marginTop: 12 }}>Communication & patterns</h4>
            <p style={{ color: "#455b76" }}>
              Synchronous WebClient calls initially; asynchronous message broker in roadmap. API Gateway manages token validation and routing. Service discovery via Eureka (optional if hosting pattern requires it).
            </p>
          </div>
        </div>
        <div />
      </div>
    </section>
  );
}
