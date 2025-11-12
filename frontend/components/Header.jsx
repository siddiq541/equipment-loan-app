import React from 'react';

const Header = () => (
  <header className="bg-white shadow-md" role="banner">
    <div className="container mx-auto max-w-screen-2xl flex justify-between items-center p-4">
      <h1 className="text-3xl font-bold tracking-wide">Equiply Pro</h1>
      <nav className="space-x-6 text-lg font-bold" role="navigation" aria-label="Main-menu">
        <a href="#listings" className="hover:text-[#C24C30] focus:outline focus:ring-2 focus:ring-[#C24C30]">Browse</a>
        <a href="#how-it-works" className="hover:text-[#C24C30] focus:outline focus:ring-2 focus:ring-[#C24C30]">How It Works</a>
        <a href="/login" className="hover:text-[#C24C30] focus:outline focus:ring-2 focus:ring-[#C24C30]">Login</a>
      </nav>
    </div>
  </header>
);

export default Header;

