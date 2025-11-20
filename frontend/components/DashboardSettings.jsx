"use client";
import React, { useState } from 'react';
import {
  PhotoIcon,
  EnvelopeIcon,
  MapPinIcon,
  PencilSquareIcon,
  DocumentTextIcon,
  CreditCardIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/solid';

const DashboardSettings = ({ role }) => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    location: '',
    profilePicture: null,
    documentation: '',
    paymentDetails: '',
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setProfile((prev) => ({ ...prev, profilePicture: file }));
  };

  const handleSave = () => {
    console.log('Saved profile:', profile);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="space-y-8">
      {/* Profile Picture */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Profile Picture</h2>
        <div className="flex items-center gap-4">
          {profile.profilePicture ? (
            <img
              src={URL.createObjectURL(profile.profilePicture)}
              alt="Profile"
              className="h-20 w-20 rounded-full object-cover border border-rust"
            />
          ) : (
            <div className="h-20 w-20 rounded-full bg-carbon flex items-center justify-center text-white">
              <PhotoIcon className="h-8 w-8" />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="text-sm text-carbon"
          />
        </div>
      </section>

      {/* Account Details */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Account Details</h2>
        <div className="space-y-4">
          <div className="relative">
            <PencilSquareIcon className="absolute left-3 top-3 h-5 w-5 text-carbon" />
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-3 rounded-md border border-rust bg-white text-carbon focus:outline-none focus:ring-2 focus:ring-saffron"
            />
          </div>
          <div className="relative">
            <EnvelopeIcon className="absolute left-3 top-3 h-5 w-5 text-carbon" />
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full pl-10 pr-4 py-3 rounded-md border border-rust bg-white text-carbon focus:outline-none focus:ring-2 focus:ring-saffron"
            />
          </div>
          <div className="relative">
            <MapPinIcon className="absolute left-3 top-3 h-5 w-5 text-carbon" />
            <input
              type="text"
              name="location"
              value={profile.location}
              onChange={handleChange}
              placeholder="Location"
              className="w-full pl-10 pr-4 py-3 rounded-md border border-rust bg-white text-carbon focus:outline-none focus:ring-2 focus:ring-saffron"
            />
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Documentation</h2>
        <div className="relative">
          <DocumentTextIcon className="absolute left-3 top-3 h-5 w-5 text-carbon" />
          <textarea
            name="documentation"
            value={profile.documentation}
            onChange={handleChange}
            placeholder="Insurance, ID, or other documents"
            className="w-full pl-10 pr-4 pt-3 h-32 rounded-md border border-rust bg-white text-carbon focus:outline-none focus:ring-2 focus:ring-saffron"
          />
        </div>
      </section>

      {/* Payment Details */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Payment Details</h2>
        <div className="relative">
          <CreditCardIcon className="absolute left-3 top-3 h-5 w-5 text-carbon" />
          <input
            type="text"
            name="paymentDetails"
            value={profile.paymentDetails}
            onChange={handleChange}
            placeholder="Card or bank info (secure)"
            className="w-full pl-10 pr-4 py-3 rounded-md border border-rust bg-white text-carbon focus:outline-none focus:ring-2 focus:ring-saffron"
          />
        </div>
      </section>

      {/* Messages */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Messages</h2>
        <div className="p-4 bg-white rounded-lg shadow border border-rust flex items-center gap-2">
          <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-carbon" />
          <p className="text-sm">📩 You have 2 new messages</p>
        </div>
      </section>

      {/* Save Button */}
      <div className="pt-4">
        <button
          onClick={handleSave}
          className="w-full py-3 px-4 bg-gradient-to-r from-paprika to-saffron text-black text-lg font-semibold rounded-md shadow-md transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:from-saffron hover:to-paprika hover:ring-2 hover:ring-saffron hover:ring-offset-2"
        >
          Save Settings
        </button>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-saffron text-black px-4 py-2 rounded-md shadow-lg animate-fade-in z-50">
          Settings saved successfully!
        </div>
      )}
    </div>
  );
};

export default DashboardSettings;



