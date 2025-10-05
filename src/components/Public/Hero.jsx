// src/components/Public/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/public.scss";

export default function Hero() {
  return (
    <section className="public-hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>AuthenTech — Zero-Cost, Proxy-Proof Attendance</h1>
          <p>
            Secure attendance for teachers and students. Dynamic QR codes, multi-source location verification,
            and device binding make proxy attendance virtually impossible — designed to run on free hosting.
          </p>

          <div className="hero-cta">
            <Link to="/register" className="btn btn-primary">Get started — free</Link>
            <Link to="/about" className="btn btn-outline">Learn more</Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="device-mock">
            <div className="mock-card">
              <div className="mock-title">Session QR</div>
              <div className="qr-placeholder"></div>
              <div className="mock-footer">15s token • single-use</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
