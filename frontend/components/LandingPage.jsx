"use client";
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import RentalForm from './RentalForm';
import Listings from './Listings';
import Benefits from './Benefits';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import Footer from './Footer';
import LoginOverlay from '../components/LoginOverlay';
import RegisterOverlay from '../components/RegisterOverlay';

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('register') === 'true') setShowRegister(true);
      if (params.get('login') === 'true') setShowLogin(true);
    }
  }, []);

  return (
    <main className="bg-[#d8b4a0] text-[#2B2B2B] font-sans relative">
      <Header
        onLoginClick={() => setShowLogin(true)}
        onRegisterClick={() => setShowRegister(true)}
      />

      <Hero />
      <RentalForm />
      <Listings />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <Footer />

      {showLogin && (
        <LoginOverlay
          role="renter"
          onClose={() => setShowLogin(false)}
          onSuccess={() => {
            setShowLogin(false);
            setToastMessage('Welcome back!');
            setTimeout(() => setToastMessage(''), 4000);
          }}
        />
      )}

      {showRegister && (
        <RegisterOverlay
          role="renter"
          onClose={() => setShowRegister(false)}
          onSuccess={() => {
            setShowRegister(false);
            setToastMessage('Account created successfully!');
            setTimeout(() => setToastMessage(''), 4000);
          }}
        />
      )}

      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-saffron text-black px-4 py-2 rounded-md shadow-lg animate-fade-in z-50">
          {toastMessage}
        </div>
      )}
    </main>
  );
};

export default LandingPage;


















