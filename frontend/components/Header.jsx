"use client";
import React from "react";

const Header = ({
  onLoginClick,
  onLogoutClick,
  onRegisterClick,
  isAuthenticated,
}) => {
  return (
    <header className="bg-white shadow-md z-50 relative">
      <div className="container mx-auto max-w-screen-2xl flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold tracking-wide text-[#8C2F2B]">Equiply Pro</h1>

        <nav className="space-x-6 text-lg font-bold text-[#2B2B2B]">
          <a
            href="/browse"
            className="hover:text-[#C24C30] focus:outline focus:ring-2 focus:ring-[#C24C30]"
          >
            Browse
          </a>

          <a
            href="/"
            className="hover:text-[#C24C30] focus:outline focus:ring-2 focus:ring-[#C24C30]"
          >
            Home
          </a>

          {isAuthenticated ? (
            <button
              onClick={onLogoutClick}
              className="hover:text-[#C24C30] focus:outline focus:ring-2 focus:ring-[#C24C30]"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={onLoginClick}
                className="hover:text-[#C24C30] focus:outline focus:ring-2 focus:ring-[#C24C30]"
              >
                Login
              </button>
              <button
                onClick={onRegisterClick}
                className="hover:text-[#C24C30] focus:outline focus:ring-2 focus:ring-[#C24C30]"
              >
                Register
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;















