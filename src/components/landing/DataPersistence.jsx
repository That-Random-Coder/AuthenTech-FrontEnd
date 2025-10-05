// src/components/landing/DataPersistence.jsx
import React from "react";
import "../../styles/landing.scss";

export default function DataPersistence() {
  return (
    <section className="landing-section" aria-labelledby="data-persistence">
      <div className="landing-grid">
        <div className="c-content">
          <div className="section-card" role="region" aria-label="Data persistence">
            <h2 id="data-persistence" className="section-title">Data Persistence Strategy</h2>
            <p className="section-sub">
              Postgres as the canonical store with a normalized schema. Keep verification details as JSON for auditing and anomaly detection.
            </p>

            <ul style={{ color: "#455b76", fontSize: 15 }}>
              <li><strong>Primary DB:</strong> PostgreSQL (free-tier-friendly providers: Fly.io/Aiven, see hosting section).</li>
              <li><strong>Core tables:</strong> users, devices (public_key + fingerprint), courses, enrollments, sessions (with location polygon), attendance_records (with verification_details_json).</li>
              <li><strong>Backups:</strong> Regular pg_dump with scripted restore steps due to free-tier constraints.</li>
            </ul>
          </div>
        </div>

        <div className="center-empty" />

        <div />
      </div>
    </section>
  );
}
