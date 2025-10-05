// src/components/Public/FeatureCards.jsx
import React from "react";
import "../../styles/public.scss";

const features = [
  {
    title: "Dynamic QR (Single-Use)",
    desc: "Short-lived, single-use tokens (15–30s) prevent screenshot replay and reuse.",
    tag: "Layer 1"
  },
  {
    title: "Multi-source Location",
    desc: "GPS + Wi-Fi + Cell triangulation + client spoof detection for robust geofencing.",
    tag: "Layer 2"
  },
  {
    title: "Device Binding & Attestation",
    desc: "Hardware-backed keys + root/jailbreak checks ensure only bound devices can mark attendance.",
    tag: "Layer 3"
  }
];

export default function FeatureCards() {
  return (
    <section className="feature-section">
      <div className="container">
        <h2 className="section-title">Security-first features</h2>
        <div className="feature-grid">
          {features.map((f) => (
            <article className="feature-card" key={f.title} role="article" aria-label={f.title}>
              <div className="feature-tag">{f.tag}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
