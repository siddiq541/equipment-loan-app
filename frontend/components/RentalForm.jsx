import React, { useState } from "react";

const categories = [
  { name: "Photo", image: "/assets/img/camera.jpg", price: "£45 / DAY" },
  { name: "Lighting", image: "/assets/img/stage_lighting.jpg", price: "£50 / DAY" },
  { name: "Music", image: "/assets/img/dj_equipment.jpg", price: "£50 / DAY" },
  { name: "Film", image: "/assets/img/film_camera.jpg", price: "£40 / DAY" },
  { name: "Podcast", image: "/assets/img/microphone.jpg", price: "£30 / DAY" },
  { name: "Laboratory", image: "/assets/img/microscope.jpg", price: "£25 / DAY" },
  { name: "Art & Craft", image: "/assets/img/engraving_machine.jpg", price: "£15 / DAY" },
];

const RentalForm = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section
      className="bg-[#FF8C42] text-white py-12"
      role="region"
      aria-labelledby="rental-form-heading"
    >
      <div className="container mx-auto max-w-screen-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4">
        {/* Left: Form */}
        <div className="bg-white text-[#2B2B2B] rounded-lg shadow-lg p-6">
          <h2
            id="rental-form-heading"
            className="text-xl lg:text-2xl font-bold mb-4"
          >
            Available For Rent
          </h2>

          {/* Category Tabs */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-6"
            role="tablist"
            aria-label="Equipment categories"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                role="tab"
                aria-selected={selectedCategory.name === category.name}
                onClick={() => setSelectedCategory(category)}
                className={`py-2 font-semibold rounded-lg transition ${
                  selectedCategory.name === category.name
                    ? "bg-white border-4 border-[#FF8C42] text-[#FF8C42]"
                    : "bg-[#FF8C42] text-white hover:bg-white hover:text-[#FF8C42]"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Rental Form */}
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            aria-label="Rental details form"
          >
            {/* Search Equipment */}
            <div>
              <label htmlFor="equipment" className="block text-sm font-medium mb-1">
                Search Equipment
              </label>
              <input
                type="text"
                id="equipment"
                name="equipment"
                placeholder="e.g. DJI Drone, Canon EOS R5"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-[#C24C30] rounded px-3 py-2 bg-white text-carbon focus:outline-none focus:ring-2 focus:ring-saffron"
              />
            </div>

            <div>
              <label
                htmlFor="pickup-location"
                className="block text-sm font-medium mb-1"
              >
                Pick up Location
              </label>
              <input
                id="pickup-location"
                name="pickup-location"
                type="text"
                placeholder="Type..."
                className="w-full border border-[#C24C30] rounded px-3 py-2"
              />
            </div>

            <div>
              <label
                htmlFor="dropoff-location"
                className="block text-sm font-medium mb-1"
              >
                Drop off Location
              </label>
              <input
                id="dropoff-location"
                name="dropoff-location"
                type="text"
                placeholder="Type..."
                className="w-full border border-[#C24C30] rounded px-3 py-2"
              />
            </div>

            <div>
              <label
                htmlFor="pickup-datetime"
                className="block text-sm font-medium mb-1"
              >
                Pick up Date & Time
              </label>
              <input
                id="pickup-datetime"
                name="pickup-datetime"
                type="datetime-local"
                className="w-full border border-[#C24C30] rounded px-3 py-2"
              />
            </div>

            <div>
              <label
                htmlFor="return-datetime"
                className="block text-sm font-medium mb-1"
              >
                Return Date & Time
              </label>
              <input
                id="return-datetime"
                name="return-datetime"
                type="datetime-local"
                className="w-full border border-[#C24C30] rounded px-3 py-2"
              />
            </div>
          </form>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-[#2B2B2B] text-white py-3 rounded hover:bg-[#C24C30] transition focus:outline focus:ring-2 focus:ring-[#C24C30]"
            >
              Choose Your Gear
            </button>
          </div>
        </div>

        {/* Right: Image + Price */}
        <div className="relative w-full max-w-xs aspect-square overflow-hidden rounded-lg shadow-lg mb-4 bg-white mx-auto">
          <img
            src={selectedCategory.image}
            alt={`${selectedCategory.name} equipment`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-[#2B2B2B] text-white text-sm font-semibold px-3 py-1 rounded shadow-md">
            {selectedCategory.price}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalForm;


