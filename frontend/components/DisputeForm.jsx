"use client";
import React, { useState } from 'react';
import {
  ExclamationTriangleIcon,
  DocumentTextIcon,
  CurrencyPoundIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  PaperClipIcon,
} from '@heroicons/react/24/solid';

const DisputeForm = ({ role= 'renter', onClose }) => {
    const [formData, setFormData] = useState({
        category: '',
        subject: '',
        description: '',
        refernceId: '',
        attachment: null,
    });

    const [submitted, setSubmitted] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const categories = [
        'Equipment Issue',
        'Listing Problem',
        'Payment Dispute',
        'Documentation Request',
        'Booking Conflict',
        'Late Return',
        'Incorrect Billing',
        'Inappropriate Behavior',
        'Other',
    ];

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'attachment') {
            setFormData((prev) => ({ ...prev, [name]: files[0] })); 
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setFormData((prev) => ({ ...prev, attachment: file }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dispute Submitted:', formData);
        setSubmitted(true);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
    };
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-carbon bg-opacity-80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-nougat bg-opacity-95 backdrop-blur-lg rounded-xl shadow-2xl p-8 border border-rust">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white text-carbon p-2 rounded-full shadow hover:bg-saffron transition"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth={2} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-white mb-6 text-center tracking-wide">
          Raise a Dispute
        </h2>

        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-carbon mb-2">Issue Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md border border-rust bg-white text-carbon focus:outline-none focus:ring-2 focus:ring-saffron"
              >
                <option value="">Select a category</option>
                {categories.map((label) => (
                  <option key={label} value={label}>{label}</option>
                ))}
              </select>
            </div>

            {/* Subject */}
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Short summary of the issue"
              required
              className="w-full px-4 py-3 rounded-md border border-rust bg-white text-carbon focus:outline-none focus:ring-2 focus:ring-saffron"
            />

            {/* Description */}
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the issue in detail"
              required
              className="w-full h-32 px-4 py-3 rounded-md border border-rust bg-white text-carbon focus:outline-none focus:ring-2 focus:ring-saffron"
            />

            {/* Reference ID */}
            <input
              type="text"
              name="referenceId"
              value={formData.referenceId}
              onChange={handleChange}
              placeholder="Booking ID, Listing ID, or Equipment ID (optional)"
              className="w-full px-4 py-3 rounded-md border border-rust bg-white text-carbon focus:outline-none focus:ring-2 focus:ring-saffron"
            />

            {/* File Upload */}
            <div className="flex items-center gap-4">
              <label className="text-sm font-semibold text-carbon">Attach Evidence</label>
              <input
                type="file"
                accept=".jpg,.png,.pdf,.doc,.docx"
                onChange={handleFileUpload}
                className="text-sm text-carbon"
              />
              {formData.attachment && (
                <span className="text-xs text-saffron">{formData.attachment.name}</span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-paprika to-saffron text-black text-lg font-semibold rounded-md shadow-md transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:from-saffron hover:to-paprika hover:ring-2 hover:ring-saffron hover:ring-offset-2"
            >
              Submit Dispute
            </button>
          </form>
        ) : (
          <div className="text-center text-carbon space-y-4">
            <h3 className="text-xl font-semibold">Thank you!</h3>
            <p>Your dispute has been submitted. We'll review it and get back to you shortly.</p>
            <button
              onClick={onClose}
              className="mt-4 text-sm text-saffron underline hover:text-paprika"
            >
              Close
            </button>
          </div>
        )}
      </div>
        {showToast && (
          <div className="fixed bottom-6 right-6 bg-saffron text-black px-4 py-2 rounded-md shadow-lg animate-fade-in">
            Dispute submitted successfully!
          </div>
        )}
    </div>
  );
};

export default DisputeForm;

