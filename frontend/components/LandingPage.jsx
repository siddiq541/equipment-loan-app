"use client";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import RentalForm from "./RentalForm";
import Listings from "./Listings";
import Benefits from "./Benefits";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Overlay from "./LoginOverlay";
import RegisterOverlay from "./RegisterOverlay";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  // Detect query params to trigger overlays
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("register") === "true") setShowRegister(true);
      if (params.get("login") === "true") setShowLogin(true);
    }
  }, []);

  return (
    <main className="bg-[#d8b4a0] text-[#2B2B2B] font-sans relative">
      {/* Header with login trigger */}
      <Header onLoginClick={() => setShowLogin(true)} />

      {/* Main sections */}
      <Hero />
      <RentalForm />
      <Listings />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <Footer
        onShowPrivacy={() => setShowPrivacy(true)}
        onShowTerms={() => setShowTerms(true)}
      />

      {/* Overlays */}
      {showLogin && <Overlay onClose={() => setShowLogin(false)} />}
      {showRegister && (
        <RegisterOverlay onClose={() => setShowRegister(false)} />
      )}
      <PrivacyPolicy isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <TermsOfService isOpen={showTerms} onClose={() => setShowTerms(false)} />
    </main>
  );
};

export default LandingPage;
