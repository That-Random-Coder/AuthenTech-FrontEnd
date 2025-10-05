// src/components/landing/DeploymentAndCI.jsx
import React from "react";
import "../../styles/landing.scss";

export default function DeploymentAndCI() {
  return (
    <section className="landing-section" aria-labelledby="deployment">
      <div className="landing-grid">
        <div className="c-content">
          <div className="section-card" role="region" aria-label="deployment">
            <h2 id="deployment" className="section-title">Zero-Cost Hosting & CI/CD</h2>
            <p className="section-sub">Hosting choices & automated delivery aligned to the zero-cost constraint. Key tradeoffs included.</p>

            <h4>Hosting summary</h4>
            <ul style={{ color: "#455b76" }}>
              <li><strong>Backend & DB:</strong> Fly.io selected for sustainable free allowance and persistent volumes.</li>
              <li><strong>Frontend:</strong> Vercel for Next.js deployments (free tier + CDN).</li>
              <li>Render considered but database expiration policy is a risk.</li>
            </ul>

            <h4 style={{ marginTop: 10 }}>CI/CD</h4>
            <p style={{ color: "#455b76" }}>
              Use GitHub Actions: run test suite, build Docker image, push to registry and deploy (flyctl). Keep secrets in GitHub repo secrets (FLY_API_TOKEN, registry tokens).
            </p>
          </div>
        </div>

        <div className="center-empty" />

        <div />
      </div>
    </section>
  );
}
