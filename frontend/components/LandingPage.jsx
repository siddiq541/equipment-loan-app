import Image from "next/image";
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import RentalForm from './RentalForm';
import Listings from './Listings';
import Benefits from './Benefits';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import Footer from './Footer';

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










