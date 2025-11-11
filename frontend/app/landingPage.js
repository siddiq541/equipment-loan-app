import Image from "next/image";
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import RentalForm from '../components/RentalForm';
import Listings from '../components/Listings';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const LandingPage = () => (
  <main className="bg-[#d8b4a0] text-[#2B2B2B] font-sans">
    <Header />
    <Hero />
    <RentalForm />
    <Listings />
    <Benefits />
    <HowItWorks />
    <Testimonials />
    <Footer />
  </main>
);

export default LandingPage;










