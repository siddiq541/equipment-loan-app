"use client";
import React, { useState } from 'react';
import axios from 'axios';
import {
  EnvelopeIcon,
  LockClosedIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid';

const RegisterOverlay = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5001/api/users/register', {
        name,
        email,
        password,
      }, {
        withCredentials: true,
      });

      localStorage.setItem('authToken', response.data.token);
      console.log('Registration successful');
      window.location.href = '/dashboard';
    } catch (err) {
      console.log(err);
      setError(err?.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-carbon bg-opacity-80 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-nougat bg-opacity-95 backdrop-blur-lg rounded-xl shadow-2xl p-8 border border-rust">

        {/* Curved Close Button */}
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-white mb-8 text-center tracking-wide">Equiply Pro Register</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <PencilSquareIcon className="absolute left-3 top-3 h-5 w-5 text-carbon" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              required
              className="w-full pl-10 pr-4 py-3 rounded-md border border-rust bg-white text-carbon text-base focus:outline-none focus:ring-2 focus:ring-saffron"
            />
          </div>
          <div className="relative">
            <EnvelopeIcon className="absolute left-3 top-3 h-5 w-5 text-carbon" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full pl-10 pr-4 py-3 rounded-md border border-rust bg-white text-carbon text-base focus:outline-none focus:ring-2 focus:ring-saffron"
            />
          </div>
          <div className="relative">
            <LockClosedIcon className="absolute left-3 top-3 h-5 w-5 text-carbon" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full pl-10 pr-4 py-3 rounded-md border border-rust bg-white text-carbon text-base focus:outline-none focus:ring-2 focus:ring-saffron"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-sm text-red-600 bg-[#ffd2d2] p-2 rounded-md">{error}</p>
          )}

          {/* Neon Hover-Up Register Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-gradient-to-r from-paprika to-saffron text-black text-lg font-semibold rounded-md shadow-md transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:from-saffron hover:to-paprika hover:ring-2 hover:ring-saffron hover:ring-offset-2 disabled:opacity-50"
          >
            {loading ? 'Registering...' : 'Register'}
          </button>

          {/* Login Link */}
          <p className="text-sm text-center text-carbon">
            Already have an account?{' '}
            <a href="/?login=true" className="text-saffron hover:underline font-semibold">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterOverlay;



