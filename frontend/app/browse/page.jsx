"use client";
import React, { Suspense } from "react";
import Header from "@/components/Header";
import BrowsePage from "@/components/BrowsePage";
import Footer from "@/components/Footer";

const Browse = () => {
  return (
    <>
      <Header />
      <main className="bg-[#f5eae2] text-carbon font-sans">
        <Suspense fallback={<div>Loading...</div>}>
          <BrowsePage />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Browse;
