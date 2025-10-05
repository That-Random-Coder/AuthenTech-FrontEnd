// src/pages/Public/Home.jsx
import React from "react";
import Header from "../../components/Public/Header";
import Hero from "../../components/Public/Hero";
import FeatureCards from "../../components/Public/FeatureCards";
import Footer from "../../components/Public/Footer";
import "../../styles/public.scss";
import LandingAfterHero from "../../components/landing/LandingAfterHero";

export default function Home() {
  return (
    <div className="public-page">
      <Header />
      <main>
        <Hero />
        <LandingAfterHero />
        <FeatureCards />
      </main>
      <Footer />
    </div>
  );
}
