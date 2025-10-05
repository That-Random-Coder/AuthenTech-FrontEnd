// src/pages/Public/About.jsx
import React from "react";
import Header from "../../components/Public/Header";
import Footer from "../../components/Public/Footer";
import "../../styles/public.scss";

export default function About() {
  return (
    <div className="public-page">
      <Header />
      <main className="container about-main">
        <h1>About AuthenTech</h1>

        <section>
          <h2>Mission</h2>
          <p>
            AuthenTech provides a proxy-proof attendance system built for reliability, security and affordability —
            optimised to run on free cloud hosting. Our layered approach (dynamic QR, multi-source location, and device binding)
            makes buddy-punching impractical.
          </p>
        </section>

        <section>
          <h2>Architecture</h2>
          <p>
            A microservices approach (Auth, User/Course, Attendance, API Gateway, Service Discovery) allows modular scaling,
            independent deployments, and stateless services that survive "cold starts" on free tiers.
          </p>
        </section>

        <section>
          <h2>Zero-Cost Constraint</h2>
          <p>
            We intentionally design for ephemeral infrastructure: short-lived tokens, stateless auth (JWT), and an easy migration
            strategy so institutions can start with zero infrastructure spend while keeping a path to scale.
          </p>
        </section>

        <section>
          <h2>Privacy & Security</h2>
          <p>
            The system prioritizes privacy: location verification is multi-source and device attestation is used only to validate the integrity
            of devices — not to expose personal data.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
