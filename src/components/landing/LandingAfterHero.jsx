// src/components/landing/LandingAfterHero.jsx
import React from "react";
import HowItWorks from "./HowItWorks";
import Architecture from "./Architecture";
import SecurityLayers from "./SecurityLayers";
import DataPersistence from "./DataPersistence";
import BackendImplementation from "./BackendImplementation";
import FrontendImplementation from "./FrontendImplementation";
import DeploymentAndCI from "./DeploymentAndCI";
import TestingAndRoadmap from "./TestingAndRoadmap";
import MidCTA from "./MidCTA";

/* This is the recommended order (mix of center-empty and center-occupied sections)
   so the QR background can peek through periodically. */
export default function LandingAfterHero() {
  return (
    <>
      <HowItWorks />
      <Architecture />
      <SecurityLayers />
      <DataPersistence />
      <BackendImplementation />
      <FrontendImplementation />
      <DeploymentAndCI />
      <TestingAndRoadmap />
      <MidCTA />
    </>
  );
}
