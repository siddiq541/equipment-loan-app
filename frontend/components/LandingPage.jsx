"use client";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import RentalForm from "./RentalForm";
import TopListings from "./TopListings";
import Benefits from "./Benefits";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Overlay from "./LoginOverlay";
import RegisterOverlay from "./RegisterOverlay";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";
import ContactForm from "./ContactForm";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("register") === "true") setShowRegister(true);
      if (params.get("login") === "true") setShowLogin(true);

      const token = localStorage.getItem("authToken");
      setIsAuthenticated(!!token);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    setToastMessage("You have been logged out.");
    setTimeout(() => setToastMessage(""), 3000);
    window.location.href = "/";
  };

  return (
    <main className="bg-[#d8b4a0] text-[#2B2B2B] font-sans relative">
      <Header
        onLoginClick={() => setShowLogin(true)}
        onLogoutClick={handleLogout}
        onRegisterClick={() => setShowRegister(true)}
        isAuthenticated={isAuthenticated}
      />

      <Hero />
      <RentalForm />
      <TopListings />
      <Benefits />
      <HowItWorks />
      <Testimonials />

      <Footer
        onShowPrivacy={() => setShowPrivacy(true)}
        onShowTerms={() => setShowTerms(true)}
        onShowContact={() => setShowContact(true)}
      />

      {/* Overlays */}
      {showLogin && <Overlay onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterOverlay onClose={() => setShowRegister(false)} />}
      <PrivacyPolicy isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <TermsOfService isOpen={showTerms} onClose={() => setShowTerms(false)} />
      <ContactForm isOpen={showContact} onClose={() => setShowContact(false)} />

      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-saffron text-black px-4 py-2 rounded-md shadow-lg animate-fade-in z-50">
          {toastMessage}
        </div>
      )}
    </main>
  );
};

export default LandingPage;










