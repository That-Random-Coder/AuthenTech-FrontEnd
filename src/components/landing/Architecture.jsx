// src/components/landing/Architecture.jsx
import React from "react";
import "../../styles/landing.scss";

function Micro({ title, children }) {
  return (
    <div className="micro-card" role="article" aria-label={title}>
      <h4 style={{ marginBottom: 8 }}>{title}</h4>
      <div style={{ color: "#475b74", fontSize: 14 }}>{children}</div>
    </div>
  );
}

export default function Architecture() {
  return (
    <section className="landing-section" aria-labelledby="architecture">
      <div className="landing-grid">
        <div /> {/* left intentionally empty to leave center visible */}
        <div className="c-content">
          <div className="section-card" role="region" aria-label="Architecture">
            <h2 id="architecture" className="section-title">System Blueprint: Microservices</h2>
            <p className="section-sub">
              Designed for resilient zero-cost hosting: small, stateless Spring Boot services behind an API Gateway.
            </p>

            <div className="micro-grid" style={{ marginTop: 12 }}>
              <Micro title="Authentication Service">
                User registration & JWT issuance. The gatekeeper for identity.
              </Micro>
              <Micro title="User & Course Management">
                CRUD for users, roles, courses and enrollments.
              </Micro>
              <Micro title="Attendance Service">
                Generates ephemeral QR tokens, validates check-ins, stores verification details.
              </Micro>
              <Micro title="API Gateway">
                Single entry point (Spring Cloud Gateway) — JWT validation + routing + cross-cutting concerns.
              </Micro>
            </div>

            <p style={{ marginTop: 12, color: "#344b6b", fontSize: 14 }}>
              Service discovery (e.g. Eureka) and minimal synchronous communication are used initially to keep the platform simple and free-tier friendly.
            </p>
          </div>
        </div>

        <div /> {/* rightmost column empty */}
      </div>
    </section>
  );
}
