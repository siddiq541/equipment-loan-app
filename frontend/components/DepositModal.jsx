"use client";
import React from "react";

const DepositModal = ({ item, onClose, onConfirm }) => {
  const depositAmount = (item.price * 0.2).toFixed(2);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-carbon bg-opacity-80 backdrop-blur-md">
      <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full border border-rust">
        <h2 className="text-xl font-bold text-[#8C2F2B] mb-4">Confirm Deposit</h2>
        <p className="text-carbon mb-4">
          You're about to pay a deposit of <strong>£{depositAmount}</strong> for <strong>{item.name}</strong>.
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-carbon rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-saffron text-black rounded hover:bg-paprika font-semibold"
          >
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepositModal;

