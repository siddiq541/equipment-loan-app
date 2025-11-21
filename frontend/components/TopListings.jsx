"use client";
import React from "react";
import { motion } from "framer-motion";
import listings from "@/app/data/listings";

const TopListings = () => {
  const topListings = [...listings]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4); // Top 4 by rating

  return (
    <section
      id="top-listings"
      className="container mx-auto max-w-screen-2xl py-12 px-4"
      role="region"
      aria-labelledby="top-heading"
    >
      <h3
        id="top-heading"
        className="text-2xl lg:text-3xl font-semibold text-[#8C2F2B] mb-6 text-center"
      >
        Top-Rated Equipment
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {topListings.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-[#E66A32] shadow-sm rounded-lg p-4 flex flex-col justify-between h-full transform transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            role="group"
            aria-label={item.label}
          >
            <div className="h-48 w-full overflow-hidden rounded mb-4">
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1">
              <h4 className="text-[#8C2F2B] font-semibold text-lg">{item.name}</h4>
              <p className="text-[#2B2B2B] font-medium">£{item.price} / day</p>
              <p className="text-sm text-gray-600">📍 {item.location}</p>
              <p className="text-sm text-gray-700">⭐ {item.rating} / 5</p>
            </div>
            <motion.a
              href="/browse"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-[#C24C30] text-white px-4 py-2 text-sm rounded text-center font-medium shadow hover:bg-[#8C2F2B] focus:outline focus:ring-2 focus:ring-[#8C2F2B]"
            >
              View More
            </motion.a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopListings;




















