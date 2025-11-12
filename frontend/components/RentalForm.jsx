import React from "react";
const RentalForm = () => (
  <section className="bg-[#FF8C42] text-white py-12" role="region" aria-labelledby="rental-form-heading">
    <div className="container mx-auto max-w-screen-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4">
      {/* Left: Form */}
      <div className="bg-white text-[#2B2B2B] rounded-lg shadow-lg p-6">
        <h2 id="rental-form-heading" className="text-xl lg:text-2xl font-bold mb-4">Available For Rent</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-6" role="tablist" aria-label="Equipment categories">
          {['Photo', 'Lighting', 'Music', 'Film', 'Podcast', 'Laboratory', 'Art & Craft'].map((category, index) => (
            <button key={index} role="tab" aria-selected={index === 0} className={`py-2 font-semibold rounded-lg ${index === 0 ? 'bg-white border-4 border-[#FF8C42] text-[#FF8C42]' : 'bg-[#FF8C42] text-white'}`}>
              {category}
            </button>
          ))}
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" aria-label="Rental details form">
          <div>
            <label htmlFor="brand" className="block text-sm font-medium mb-1">Choose Brand</label>
            <select id="brand" name="brand" className="w-full border border-[#C24C30] rounded px-3 py-2">
              {['Canon', 'Sony', 'Nikon', 'Fujifilm', 'Panasonic', 'Olympus'].map((brand, index) => (
                <option key={index}>{brand}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="pickup-location" className="block text-sm font-medium mb-1">Pick up Location</label>
            <input id="pickup-location" name="pickup-location" type="text" placeholder="Type..." className="w-full border border-[#C24C30] rounded px-3 py-2" />
          </div>
          <div>
            <label htmlFor="dropoff-location" className="block text-sm font-medium mb-1">Drop off Location</label>
            <input id="dropoff-location" name="dropoff-location" type="text" placeholder="Type..." className="w-full border border-[#C24C30] rounded px-3 py-2" />
          </div>
          <div>
            <label htmlFor="pickup-datetime" className="block text-sm font-medium mb-1">Pick up Date & Time</label>
            <input id="pickup-datetime" name="pickup-datetime" type="datetime-local" className="w-full border border-[#C24C30] rounded px-3 py-2" />
          </div>
          <div>
            <label htmlFor="return-datetime" className="block text-sm font-medium mb-1">Return Date & Time</label>
            <input id="return-datetime" name="return-datetime" type="datetime-local" className="w-full border border-[#C24C30] rounded px-3 py-2" />
          </div>
        </form>
        <div className="mt-6">
          <button type="submit" className="w-full bg-[#2B2B2B] text-white py-3 rounded hover:bg-[#C24C30] transition focus:outline focus:ring-2 focus:ring-[#C24C30]">
            Choose Your Gear
          </button>
        </div>
      </div>

      {/* Right: Image + Price */}
      <div className="flex flex-col items-center justify-center">
        <img src="/assets/img/3d-printing.jpg" alt="3D Printer in action" className="w-full max-w-md rounded-lg shadow-lg mb-4" />
        <div className="text-3xl font-bold text-[#2B2B2B]">£45 / DAY</div>
        <p className="text-[#2B2B2B] mt-2">Based on selected category</p>
      </div>
    </div>
  </section>
);

export default RentalForm;
