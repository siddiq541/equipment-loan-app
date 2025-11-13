"use client";
import React from 'react';

const LoginOverlay = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-carbon bg-opacity-60 backdrop-blur-md">
      <div className="relative w-full max-w-2xl h-[90vh] bg-nougat bg-opacity-90 backdrop-blur-lg rounded-xl shadow-xl border border-rust overflow-hidden">
        <iframe
          src="/login"
          className="w-full h-full border-none"
          title="Login"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-maroon hover:text-rust font-semibold text-sm underline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginOverlay;

