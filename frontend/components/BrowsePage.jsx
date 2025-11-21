"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import listings from "@/app/data/listings";
import { categories } from "@/app/data/categories";
import BookingFormModal from "../components/BookingFormModal";

const BrowsePage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [availableNow, setAvailableNow] = useState(false);
  const [sortBy, setSortBy] = useState("category");
  const [selectedItem, setSelectedItem] = useState(null);
  const [bookingItem, setBookingItem] = useState(null);

  useEffect(() => {
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const pickupLocation = searchParams.get("pickupLocation");
    const dropoffLocation = searchParams.get("dropoffLocation");

    if (search) setSearchQuery(search);
    if (pickupLocation || dropoffLocation) {
      setLocationQuery(
        `${pickupLocation || ""} ${dropoffLocation || ""}`.trim()
      );
    }
    if (category) setSortBy("category");
  }, [searchParams]);

  const handleClearFilters = () => {
    setSearchQuery("");
    setLocationQuery("");
    setAvailableNow(false);
    setSortBy("category");
    router.push("/browse");
  };

  const filteredListings = listings
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        item.location.toLowerCase().includes(locationQuery.toLowerCase()) &&
        (!availableNow || item.available)
    )
    .sort((a, b) => {
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "location") return a.location.localeCompare(b.location);
      return 0;
    });

  const grouped =
    sortBy === "category"
      ? categories.map((cat) => ({
          label: `${cat.icon || ""} ${cat.name}`,
          items: filteredListings.filter((item) => item.category === cat.name),
        }))
      : Array.from(
          filteredListings.reduce((map, item) => {
            const key =
              sortBy === "location"
                ? item.location
                : sortBy === "available"
                ? item.available
                  ? "Available Now"
                  : "Unavailable"
                : "All";
            if (!map.has(key)) map.set(key, []);
            map.get(key).push(item);
            return map;
          }, new Map())
        ).map(([label, items]) => ({ label, items }));

  return (
    <section className="min-h-screen bg-[#d8b4a0] text-carbon font-sans py-12 px-4">
      <div className="container mx-auto max-w-screen-2xl">
        <h1 className="text-3xl font-bold text-[#8C2F2B] tracking-wide mb-8">
          Browse Listings
        </h1>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <input
            type="text"
            placeholder="Search equipment..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-rust bg-white text-carbon focus:outline-none focus:ring-2 focus:ring-saffron"
          />
          <input
            type="text"
            placeholder="Search location..."
            value={locationQuery}
            onChange={(e) => setLocationQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-rust bg-white text-carbon focus:outline-none focus:ring-2 focus:ring-saffron"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-rust bg-white text-carbon focus:outline-none focus:ring-2 focus:ring-saffron"
          >
            <option value="category">Group by Category</option>
            <option value="location">Group by Location</option>
            <option value="price">Sort by Price</option>
            <option value="rating">Sort by Rating</option>
          </select>
          <label className="flex items-center gap-2 text-sm font-medium text-carbon">
            <input
              type="checkbox"
              checked={availableNow}
              onChange={(e) => setAvailableNow(e.target.checked)}
              className="h-4 w-4 text-saffron border-carbon focus:ring-saffron"
            />
            Available Now
          </label>
        </div>

        {/* Clear Filters */}
        <div className="flex justify-end mb-10">
          <button
            onClick={handleClearFilters}
            className="px-4 py-2 bg-[#C24C30] text-white rounded hover:bg-[#8C2F2B] transition text-sm font-semibold"
          >
            Clear Filters
          </button>
        </div>

        {/* Listings */}
        {grouped.map((group, i) =>
          group.items.length > 0 ? (
            <div key={i} className="mb-12">
              <h2 className="text-xl font-semibold mb-4 text-[#C24C30]">
                {group.label}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((item, index) => {
                  const isFlipped = selectedItem?.name === item.name;

                  return (
                    <div key={index} className="relative perspective">
                      <div
                        className={`transition-transform duration-700 transform-style-preserve-3d ${
                          isFlipped ? "rotate-y-180" : ""
                        }`}
                      >
                        {/* Front Side */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-rust backface-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-4 space-y-2">
                            <h3 className="text-lg font-bold">{item.name}</h3>
                            <p className="text-sm">{item.location}</p>
                            <p className="text-sm">£{item.price} / day</p>
                            <p className="text-sm">⭐ {item.rating} / 5</p>
                            {item.available ? (
                              <p className="text-sm text-[#16A34A]">
                                ✅ Available Now
                              </p>
                            ) : (
                              <p className="text-sm text-gray-500">
                                ⏳ Currently Unavailable
                              </p>
                            )}
                            <div className="grid grid-cols-2 gap-2 pt-2">
                              <button
                                onClick={() => setBookingItem(item)}
                                className="py-2 bg-[#2B2B2B] text-white rounded hover:bg-[#C24C30] transition text-sm font-semibold"
                              >
                                Book Now
                              </button>
                              <button
                                onClick={() =>
                                  setSelectedItem(isFlipped ? null : item)
                                }
                                className="py-2 bg-saffron text-black rounded hover:bg-paprika transition text-sm font-semibold"
                              >
                                More Info
                              </button>
                            </div>
                            <p className="text-xs text-carbon pt-1">
                              Deposit:{" "}
                              <span className="font-medium">
                                £{(item.price * 0.2).toFixed(2)}
                              </span>
                            </p>
                          </div>
                        </div>

                        {/* Back Side */}
                        <div className="absolute inset-0 bg-white rounded-lg shadow-md border border-rust p-4 backface-hidden rotate-y-180 flex flex-col justify-between">
                          <div className="overflow-y-auto max-h-64">
                            <h3 className="text-lg font-bold mb-2">
                              {item.name}
                            </h3>
                            <p className="text-sm text-carbon whitespace-pre-line">
                              {item.description || "No description provided."}
                            </p>
                          </div>
                          <button
                            onClick={() => setSelectedItem(null)}
                            className="mt-4 w-full py-2 bg-[#2B2B2B] text-white rounded hover:bg-[#C24C30] transition text-sm font-semibold"
                          >
                            Back
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null
        )}
      </div>

      {/* Booking Modal */}
      {bookingItem && (
        <BookingFormModal
          item={bookingItem}
          onClose={() => setBookingItem(null)}
          onConfirm={(details) => {
            console.log("Booking confirmed:", details);
            alert(`Booking confirmed for ${details.item.name}`);
          }}
        />
      )}
    </section>
  );
};

export default BrowsePage;
