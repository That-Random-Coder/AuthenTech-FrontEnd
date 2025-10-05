// src/components/landing/FrontendImplementation.jsx
import React from "react";
import "../../styles/landing.scss";

export default function FrontendImplementation() {
  return (
    <section className="landing-section" aria-labelledby="frontend">
      <div className="landing-grid">
        <div />
        <div className="c-content">
          <div className="section-card" role="region" aria-label="frontend">
            <h2 id="frontend" className="section-title">Frontend: Mobile & Web</h2>
            <p className="section-sub">Two complementary interfaces: Flutter mobile apps for day-to-day checks and a Next.js admin dashboard for teachers & admins.</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
              <div style={{ padding: 12 }}>
                <h4>Mobile (Flutter)</h4>
                <p style={{ color: "#455b76" }}>
                  Cross-platform app for scanning and session control. Integrates:
                </p>
                <ul style={{ color: "#455b76" }}>
                  <li>qr_flutter / mobile_scanner</li>
                  <li>geolocator + mock-location detection</li>
                  <li>device attestation packages (RootBeer / IOSSecuritySuite wrappers)</li>
                </ul>
              </div>

              <div style={{ padding: 12 }}>
                <h4>Web (Next.js)</h4>
                <p style={{ color: "#455b76" }}>
                  Admin portal for session creation, reports and realtime dashboards. Deploy on Vercel free-tier for global CDN.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div />
      </div>
    </section>
  );
}
