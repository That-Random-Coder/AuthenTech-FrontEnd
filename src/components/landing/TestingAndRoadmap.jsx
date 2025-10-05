// src/components/landing/TestingAndRoadmap.jsx
import React from "react";
import "../../styles/landing.scss";

export default function TestingAndRoadmap() {
  return (
    <section className="landing-section" aria-labelledby="testing-roadmap">
      <div className="landing-grid">
        <div />

        <div className="c-content">
          <div className="section-card" role="region" aria-label="testing and roadmap">
            <h2 id="testing-roadmap" className="section-title">Validation, Monitoring & Roadmap</h2>
            <p className="section-sub">Comprehensive testing plan and pragmatic roadmap to scale beyond zero-cost.</p>

            <h4>Testing</h4>
            <ul style={{ color: "#455b76" }}>
              <li>Unit tests (JUnit/Mockito), integration tests (Testcontainers for Postgres), and security penetration simulations targeting replay, spoofing and device-compromise scenarios.</li>
            </ul>

            <h4 style={{ marginTop: 10 }}>Monitoring</h4>
            <ul style={{ color: "#455b76" }}>
              <li>Structured JSON logs, /health endpoints (Spring Boot Actuator), and quota monitoring for free-tier usage.</li>
            </ul>

            <h4 style={{ marginTop: 10 }}>Roadmap</h4>
            <ol style={{ color: "#455b76" }}>
              <li>MVP on free tiers → adoption</li>
              <li>Introduce message queue + analytics service</li>
              <li>Paid hosting & advanced anomaly detection</li>
            </ol>
          </div>
        </div>

        <div />
      </div>
    </section>
  );
}
