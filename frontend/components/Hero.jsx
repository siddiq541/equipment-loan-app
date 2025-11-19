import React from 'react';

const Hero = () => (
  <section className="bg-[#2B2B2B] text-[#FFD9A0] py-16 text-center" aria-labelledby="hero-heading">
    <h2 id="hero-heading" className="text-4xl lg:text-5xl font-bold mb-4">Certified Tools. Trusted Rentals.</h2>
    <p className="text-lg mb-6">Find professional-grade equipment from verified sellers near you.</p>
    <form className="flex flex-col md:flex-row justify-center gap-4 max-w-3xl mx-auto" role="search" aria-label="Equipment search">
      <input type="text" placeholder="Search equipment..." className="px-4 py-2 rounded border border-[#C24C30] text-white" />
      <input type="text" placeholder="Location" className="px-4 py-2 rounded border border-[#C24C30] text-white" />
      <button type="submit" className="bg-[#8C2F2B] hover:bg-[#C24C30] text-white px-6 py-2 rounded focus:outline focus:ring-2 focus:ring-white">Search</button>
    </form>
  </section>
);

export default Hero;
