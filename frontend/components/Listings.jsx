import React from "react";

const listings = [
  { name: 'Canon EOS R5', category: 'Photo', price: '£45/day', location: 'London', image: '/assets/img/camera.jpg', label: 'Canon EOS R5 camera' },
  { name: 'Biolouge Microscope', category: 'Laboratory', price: '£25/day', location: 'Manchester', image: '/assets/img/microscope.jpg', label: 'Biolouge Microscope' },
  { name: '3D Printer', category: 'Art & Craft', price: '£15/day', location: 'Bristol', image: '/assets/img/3d-printing.jpg', label: '3D Printer' },
  { name: 'Engraving Machine', category: 'Art & Craft', price: '£50/day', location: 'Bristol', image: '/assets/img/engraving_machine.jpg', label: 'Engraving Machine' },
  { name: 'DJ Equipment', category: 'Music', price: '£50/day', location: 'Sheffield', image: '/assets/img/dj_equipment.jpg', label: 'DJ Equipment' },
  { name: 'Stage Lights', category: 'Lighting', price: '£50/day', location: 'Cardiff', image: '/assets/img/stage_lighting.jpg', label: 'Stage Lights' },
  { name: 'Film Camera', category: 'Film', price: '£40/day', location: 'Norwich', image: '/assets/img/film_camera.jpg', label: 'Film Camera' },
  { name: 'Podcast Microphone', category: 'Podcast', price: '£30/day', location: 'Sunderland', image: '/assets/img/microphone.jpg', label: 'Podcast Microphone' },
  { name: 'Tufting Gun', category: 'Art & Craft', price: '£5/day', location: 'London', image: '/assets/img/tufting_gun.jpg', label: 'Tufting Gun' },
];

const Listings = () => (
  <section
    id="listings"
    className="container mx-auto max-w-screen-2xl py-12 px-4"
    role="region"
    aria-labelledby="featured-heading"
  >
    <h3
      id="featured-heading"
      className="text-2xl lg:text-3xl font-semibold text-[#8C2F2B] mb-6 text-center"
    >
      Featured Equipment
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
      {listings.map((item, index) => (
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
          <div>
            <h4 className="text-[#8C2F2B] font-semibold text-lg">{item.name}</h4>
            <p className="text-[#2B2B2B] font-medium">{item.price}</p>
            <p className="text-sm text-gray-600">{item.location}</p>
          </div>
          <button className="mt-4 bg-[#C24C30] text-white px-4 py-2 text-sm rounded hover:bg-[#8C2F2B] focus:outline focus:ring-2 focus:ring-[#8C2F2B]">
            View Details
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default Listings;







