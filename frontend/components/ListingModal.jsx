"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { motion } from "framer-motion";

const ListingModal = ({ item, onClose }) => {
  const [startDate, setStartDate] = useState(null);
  const depositAmount = (parseFloat(item.price) * 0.2).toFixed(2);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-carbon bg-opacity-80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full border border-rust relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white text-carbon p-2 rounded-full shadow hover:bg-saffron transition"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <img
          src={item.image}
          alt={item.label}
          className="w-full h-48 object-cover rounded mb-4"
        />

        {/* Details */}
        <h2 className="text-xl font-bold text-[#8C2F2B] mb-2">{item.name}</h2>
        <p className="text-sm text-carbon mb-1">📂 {item.category}</p>
        <p className="text-sm text-carbon mb-1">📍 {item.location}</p>
        <p className="text-sm text-carbon mb-1">💰 £{item.price} / day</p>
        <p className="text-sm text-carbon mb-1">⭐ {item.rating} / 5</p>
        <p className="text-sm text-carbon mb-1">💳 Deposit: £{depositAmount}</p>

        {/* Description */}
        <p className="text-sm text-carbon mt-4 mb-4 whitespace-pre-line">
          {item.description || "No description provided."}
        </p>

        {/* Booking Date */}
        <label className="block text-sm font-medium text-carbon mb-1">
          Select Booking Date
        </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Choose a date"
          className="w-full px-4 py-2 border border-rust rounded focus:outline-none focus:ring-2 focus:ring-saffron"
        />

        {/* Confirm Button */}
        <button
          onClick={onClose}
          className="mt-6 w-full py-2 bg-[#2B2B2B] text-white rounded hover:bg-[#C24C30] transition font-semibold"
        >
          Confirm & Close
        </button>
      </motion.div>
    </div>
  );
};

export default ListingModal;





