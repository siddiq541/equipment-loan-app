"use client";
import React, { useState } from "react";
import api from "@/utils/api";
import {
  EnvelopeIcon,
  LockClosedIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";

const RegisterOverlay = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [updates, setUpdates] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!agreed) {
      setError("You must agree to the Terms and Privacy Policy.");
      setLoading(false);
      return;
    }

    if (!role) {
      setError("Please select a role before registering.");
      setLoading(false);
      return;
    }

    if (!username) {
      setError("Username is required.");
      setLoading(false);
      return;
    }

    try {
      const response = await api.post(
        "/api/users/register",
        {
          username,
          name,
          email,
          password,
          role,
          updates,
        },
        {
          withCredentials: true,
        }
      );

      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("role", role);
      console.log("Registration successful");
      window.location.href = "/dashboard";
    } catch (err) {
      console.log(err);
      setError(
        err?.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-carbon bg-opacity-80 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-nougat bg-opacity-95 backdrop-blur-lg rounded-xl shadow-2xl p-8 border border-rust">
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-white mb-8 text-center tracking-wide">
          Equiply Pro Register
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username */}
          <div className="relative">
            <PencilSquareIcon className="absolute left-3 top-3 h-5 w-5 text-carbon" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
              className="w-full pl-10 pr-4 py-3 rounded-md border border-rust bg-white text-carbon text-base focus:outline-none focus:ring-2 focus:ring-saffron"
            />
          </div>

          {/* Full Name */}
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

          {/* Email */}
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

          {/* Password */}
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

          {/* Role Dropdown */}
          <div>
            <label className="block text-sm font-medium text-carbon mb-1">
              Select Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="w-full border border-rust rounded px-3 py-2 bg-white text-carbon focus:outline-none focus:ring-2 focus:ring-saffron"
            >
              <option value="">-- Choose a role --</option>
              <option value="owner">Owner</option>
              <option value="renter">Renter</option>
            </select>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-sm text-red-600 bg-[#ffd2d2] p-2 rounded-md">
              {error}
            </p>
          )}

          {/* Checkboxes */}
          <div className="space-y-3 mt-4">
            <label className="flex items-start space-x-2 text-sm">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                required
                className="mt-1"
              />
              <span>
                I agree to the
                <span
                  onClick={() => setShowTerms(true)}
                  className="text-[#C24C30] underline mx-1 cursor-pointer"
                >
                  Terms
                </span>
                and
                <span
                  onClick={() => setShowPrivacy(true)}
                  className="text-[#C24C30] underline mx-1 cursor-pointer"
                >
                  Privacy Policy
                </span>
                .
              </span>
            </label>

            <label className="flex items-start space-x-2 text-sm">
              <input
                type="checkbox"
                checked={updates}
                onChange={(e) => setUpdates(e.target.checked)}
                className="mt-1"
              />
              <span>Send me product updates (optional)</span>
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-gradient-to-r from-paprika to-saffron text-black text-lg font-semibold rounded-md shadow-md transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:from-saffron hover:to-paprika hover:ring-2 hover:ring-saffron hover:ring-offset-2 disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>

          {/* Login Link */}
          <p className="text-sm text-center text-carbon">
            Already have an account?{" "}
            <a
              href="/?login=true"
              className="text-saffron hover:underline font-semibold"
            >
              Login
            </a>
          </p>
        </form>

        {/* Modals */}
        <PrivacyPolicy
          isOpen={showPrivacy}
          onClose={() => setShowPrivacy(false)}
        />
        <TermsOfService
          isOpen={showTerms}
          onClose={() => setShowTerms(false)}
        />
      </div>
    </div>
  );
};

export default RegisterOverlay;
