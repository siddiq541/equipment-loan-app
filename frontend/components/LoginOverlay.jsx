"use client";
import React, { useState } from "react";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import ResetPasswordOverlay from "./ResetPasswordOverlay";
import api from "@/utils/api";

const LoginOverlay = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showReset, setShowReset] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post(
        "/api/users/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("role", response.data.role);
      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("rememberMe");
      }

      console.log("Login successful");
      window.location.href = "/dashboard";
    } catch (err) {
      console.log(err);
      setError(
        err?.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-carbon bg-opacity-80 backdrop-blur-md">
      {showReset ? (
        <ResetPasswordOverlay onClose={() => setShowReset(false)} />
      ) : (
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
            Equiply Pro Login
          </h2>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
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

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-saffron border-carbon focus:ring-saffron"
              />
              <label
                htmlFor="rememberMe"
                className="text-sm text-carbon font-medium"
              >
                Remember Me
              </label>
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-sm text-red-600 bg-[#ffd2d2] p-2 rounded-md">
                {error}
              </p>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-gradient-to-r from-paprika to-saffron text-black text-lg font-semibold rounded-md shadow-md transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:from-saffron hover:to-paprika hover:ring-2 hover:ring-saffron hover:ring-offset-2 disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            {/* Register Link */}
            <p className="text-sm text-center text-carbon">
              Don’t have an account?{" "}
              <a
                href="/?register=true"
                className="text-saffron hover:underline font-semibold"
              >
                Register
              </a>
            </p>

            {/* Forgot Password */}
            <p className="text-sm text-center text-carbon mt-4">
              <button
                type="button"
                onClick={() => setShowReset(true)}
                className="text-saffron hover:underline font-semibold"
              >
                Forgot Password?
              </button>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginOverlay;
