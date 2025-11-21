"use client";
import React, { useState, useEffect } from "react";

const BookingFormModal = ({ item, onClose, onConfirm }) => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [messageToOwner, setMessageToOwner] = useState("");

  const depositAmount = (item.price * 0.2).toFixed(2);

  // Load saved form state
  useEffect(() => {
    const saved = localStorage.getItem("bookingForm");
    if (saved) {
      const data = JSON.parse(saved);
      setPickupLocation(data.pickupLocation || "");
      setDropoffLocation(data.dropoffLocation || "");
      setPickupDate(data.pickupDate || "");
      setReturnDate(data.returnDate || "");
      setSpecialRequests(data.specialRequests || "");
      setMessageToOwner(data.messageToOwner || "");
    }
  }, []);

  // Save form state
  useEffect(() => {
    localStorage.setItem(
      "bookingForm",
      JSON.stringify({
        pickupLocation,
        dropoffLocation,
        pickupDate,
        returnDate,
        specialRequests,
        messageToOwner,
      })
    );
  }, [pickupLocation, dropoffLocation, pickupDate, returnDate, specialRequests, messageToOwner]);

  //Calculate rental duration
  const getDuration = () => {
    if (!pickupDate || !returnDate) return null;
    const start = new Date(pickupDate);
    const end = new Date(returnDate);
    const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm({
      item,
      pickupLocation,
      dropoffLocation,
      pickupDate,
      returnDate,
      specialRequests,
      messageToOwner,
      duration: getDuration(),
    });
    localStorage.removeItem("bookingForm");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg overflow-y-auto max-h-[90vh]">
        <h2 className="text-xl font-bold mb-4">Book: {item.name}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Pick up Location"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="w-full border border-rust rounded px-3 py-2"
            required
          />
          <input
            type="text"
            placeholder="Drop off Location"
            value={dropoffLocation}
            onChange={(e) => setDropoffLocation(e.target.value)}
            className="w-full border border-rust rounded px-3 py-2"
            required
          />
          <input
            type="datetime-local"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="w-full border border-rust rounded px-3 py-2"
            required
          />
          <input
            type="datetime-local"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="w-full border border-rust rounded px-3 py-2"
            required
          />
          <textarea
            placeholder="Special requests (e.g. documentation, insurance)"
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            className="w-full border border-rust rounded px-3 py-2"
            rows={3}
          />
          <textarea
            placeholder="Message to owner"
            value={messageToOwner}
            onChange={(e) => setMessageToOwner(e.target.value)}
            className="w-full border border-rust rounded px-3 py-2"
            rows={2}
          />

          {/* Booking Summary */}
          <div className="bg-[#f9f9f9] border border-saffron rounded p-4 text-sm text-carbon space-y-1">
            <p><strong>Item:</strong> {item.name}</p>
            <p><strong>Location:</strong> {pickupLocation} → {dropoffLocation}</p>
            <p><strong>Dates:</strong> {pickupDate} to {returnDate}</p>
            {getDuration() && (
              <p><strong>Duration:</strong> {getDuration()} day(s)</p>
            )}
            <p><strong>Deposit:</strong> £{depositAmount}</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#2B2B2B] text-white rounded hover:bg-[#C24C30]"
            >
              Pay Deposit & Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingFormModal;



