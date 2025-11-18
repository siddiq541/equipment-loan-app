import React from "react";

const TermsOfService = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-title"
    >
      <div className="bg-white max-w-3xl w-full mx-4 p-6 rounded-lg shadow-lg overflow-y-auto max-h-[90vh] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#C24C30] font-bold text-xl"
          aria-label="Close Terms of Service"
        >
          &times;
        </button>

        <h2 id="terms-title" className="text-2xl font-bold text-[#8C2F2B] mb-4">
          Terms of Service
        </h2>

        <p className="mb-4 text-sm text-[#2B2B2B]">Effective Date: 18 November 2025</p>

        <div className="space-y-4 text-[#2B2B2B] text-sm">
          <p>Welcome to Equiply Pro. By accessing or using our platform, you agree to the following terms:</p>

          <h3 className="font-semibold text-[#C24C30]">1. Use of Services</h3>
          <p>You must be at least 18 years old and agree to provide accurate information when renting equipment.</p>

          <h3 className="font-semibold text-[#C24C30]">2. Rental Agreement</h3>
          <ul className="list-disc pl-5">
            <li>Equipment must be returned in the condition it was rented.</li>
            <li>Late returns may incur additional fees.</li>
            <li>You are responsible for loss or damage during the rental period.</li>
          </ul>

          <h3 className="font-semibold text-[#C24C30]">3. Payment Terms</h3>
          <p>All rentals must be paid in advance. We accept major credit/debit cards and secure online payments.</p>

          <h3 className="font-semibold text-[#C24C30]">4. Cancellation & Refunds</h3>
          <ul className="list-disc pl-5">
            <li>Full refund for cancellations made 24 hours before pick-up.</li>
            <li>No refunds for same-day cancellations or no-shows.</li>
          </ul>

          <h3 className="font-semibold text-[#C24C30]">5. Intellectual Property</h3>
          <p>All content on Equiply Pro is owned by us or our licensors. You may not copy or redistribute without permission.</p>

          <h3 className="font-semibold text-[#C24C30]">6. Limitation of Liability</h3>
          <p>We are not liable for indirect damages, loss of income, or third-party claims arising from equipment use.</p>

          <h3 className="font-semibold text-[#C24C30]">7. Changes to Terms</h3>
          <p>We may update these terms at any time. Continued use of the platform means you accept the changes.</p>

          <h3 className="font-semibold text-[#C24C30]">8. Governing Law</h3>
          <p>These terms are governed by the laws of England and Wales.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

