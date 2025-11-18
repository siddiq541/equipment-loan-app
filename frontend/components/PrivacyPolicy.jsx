import React from 'react';

const PrivacyPolicy = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" 
    role="dialog" aria-modal="true" aria-labelledby="privacy-policy-title">
      <div className="bg-white max-w-3xl w-full mx-4 p-6 rounded-lg shadow-lg overflow-y-auto max-h-[90vh] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#C24C30] font-bold text-xl"
          aria-label="Close Privacy Policy"
        >
          &times;
        </button>

        <h2 id="privacy-policy-title" className="text-2xl font-bold text-[#8C2F2B] mb-4">
          Privacy Policy
        </h2>

        <p className="mb-4 text-sm text-[#2B2B2B]">Effective Date: 18 November 2025</p>

        <div className="space-y-4 text-[#2B2B2B] text-sm">
          <p>
            Equiply Pro is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website and services.
          </p>

          <h3 className="font-semibold text-[#C24C30]">1. Information We Collect</h3>
          <ul className="list-disc pl-5">
            <li>Personal details: name, email, phone number</li>
            <li>Rental data: equipment preferences, rental history</li>
            <li>Location data: pick-up/drop-off addresses</li>
            <li>Technical data: browser type, IP address, device info</li>
          </ul>

          <h3 className="font-semibold text-[#C24C30]">2. How We Use Your Information</h3>
          <ul className="list-disc pl-5">
            <li>To process rentals and payments</li>
            <li>To personalize your experience</li>
            <li>To improve our services and website</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h3 className="font-semibold text-[#C24C30]">3. Sharing Your Information</h3>
          <p>We do not sell your data. We may share it with:</p>
          <ul className="list-disc pl-5">
            <li>Payment processors</li>
            <li>Delivery partners</li>
            <li>Legal authorities (if required)</li>
          </ul>

          <h3 className="font-semibold text-[#C24C30]">4. Data Security</h3>
          <p>We use encryption, secure servers, and access controls to protect your data.</p>

          <h3 className="font-semibold text-[#C24C30]">5. Your Rights</h3>
          <ul className="list-disc pl-5">
            <li>Request access to your data</li>
            <li>Ask for corrections or deletion</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h3 className="font-semibold text-[#C24C30]">6. Cookies</h3>
          <p>We use cookies to enhance user experience. You can manage cookie preferences in your browser settings.</p>

          <h3 className="font-semibold text-[#C24C30]">7. Contact Us</h3>
          <p>For privacy questions: <a href="mailto:support@equiplypro.com" className="underline text-[#C24C30]">support@equiplypro.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

  

