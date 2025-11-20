import React from "react";
import Image from "next/image";

const Footer = ({ onShowPrivacy, onShowTerms, onShowContact }) => (
  <footer className="bg-[#E66A32] text-center py-6 text-sm text-black" role="contentinfo">
    <div className="container mx-auto max-w-screen-2xl px-4">
      <Image
        src="/assets/img/logo.png"
        alt="Equiply Pro logo"
        width={48}
        height={48}
        className="mx-auto mb-2 w-12 h-12"
      />
      <p className="text-black font-bold">Equiply Pro</p>
      <p className="uppercase text-black">Certified Tools. Trusted Rentals.</p>
      <p className="mt-2 text-black">© 2025 Equiply Pro. Certified Tools. Trusted Rentals.</p>

      <nav aria-label="Footer links" className="mt-2 space-x-4">
        <button
          onClick={onShowPrivacy}
          className="hover:text-white focus:outline focus:ring-2 focus:ring-white underline"
        >
          Privacy Policy
        </button>
        <button
          onClick={onShowTerms}
          className="hover:text-white focus:outline focus:ring-2 focus:ring-white underline"
        >
          Terms
        </button>
        <button
          onClick={onShowContact}
          className="hover:text-white focus:outline focus:ring-2 focus:ring-white underline"
        >
          Contact
        </button>
      </nav>
    </div>
  </footer>
);

export default Footer;



