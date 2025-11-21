"use client";
import React from "react";
import Header from "@/components/Header";
import BrowsePage from "@/components/BrowsePage";
import Footer from "@/components/Footer";

const Browse = () => {
  return (
    <>
      <Header />
      <main className="bg-[#f5eae2] text-carbon font-sans">
        <BrowsePage />
      </main>
      <Footer />
    </>
  );
};

export default Browse;

