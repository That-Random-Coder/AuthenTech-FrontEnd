// src/components/landing/SecurityLayers.jsx
import React from "react";
import "../../styles/landing.scss";

const layerData = [
  {
    title: "Layer 1 — Dynamic QR (Single-Use)",
    text: "Short-lived single-use tokens (15–30s). Encodes a signed nonce/JWT. Prevents screenshot replay and replay attacks."
  },
  {
    title: "Layer 2 — Multi-source Location",
    text: "Geofence baseline + Wi-Fi and cell triangulation + client mock-location detection. Multi-source triangulation reduces spoofing risk."
  },
  {
    title: "Layer 3 — Device Binding & Attestation",
    text: "Device-generated key pair bound to account. Attestation and root/jailbreak checks block compromised devices."
  }
];

export default function SecurityLayers() {
  return (
    <section className="landing-section" aria-labelledby="security-layers">
      <div className="landing-grid">
        <div /> {/* left empty so center is occupied by content */}
        <div className="c-content">
          <div className="section-card" role="region" aria-label="Security layers">
            <h2 id="security-layers" className="section-title">The Proxy-Proof Security Framework</h2>
            <p className="section-sub">A Zero-Trust, defense-in-depth model: layers work together to make proxy attendance infeasible.</p>

            <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
              {layerData.map((l) => (
                <article style={{ background: "#f9fbff", padding: 14, borderRadius: 10 }} key={l.title}>
                  <h3 style={{ margin: 0 }}>{l.title}</h3>
                  <p style={{ marginTop: 8, color: "#455b76" }}>{l.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div /> {/* right empty */}
      </div>
    </section>
  );
}
