import React from "react";

const Footer = () => (
  <footer className="bg-[#E66A32] text-center py-6 text-sm text-black" role="contentinfo">
    <div className="container mx-auto max-w-screen-2xl px-4">
      <img src="/assets/img/Fulllogo(1).png" alt="Equiply Pro logo" className="mx-auto mb-2 w-12 h-12" />
      <p className="text-black font-bold">Equiply Pro</p>
      <p className="uppercase text-black">Certified Tools. Trusted Rentals.</p>
      <p className="mt-2 text-black">© 2025 Equiply Pro. Certified Tools. Trusted Rentals.</p>
      <nav aria-label="Footer links" className="mt-2 space-x-4">
        <a href="#" className="hover:text-white focus:outline focus:ring-2 focus:ring-white">Privacy Policy</a>
        <a href="#" className="hover:text-white focus:outline focus:ring-2 focus:ring-white">Terms</a>
        <a href="#" className="hover:text-white focus:outline focus:ring-2 focus:ring-white">Contact</a>
      </nav>
    </div>
  </footer>
);

export default Footer;

