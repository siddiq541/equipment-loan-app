import React from "react";

const listings = [
  { name: 'Canon EOS R5', price: '£45/day', image: '/assets/img/camera.jpg', label: 'Canon EOS R5 camera' },
  { name: 'Biolouge Microscope', price: '£25/day', image: '/assets/img/microscope.jpg', label: 'Biolouge Microscope' },
  { name: '3D Printer', price: '£15/day', image: '/assets/img/3d-printing.jpg', label: '3D Printer' },
  { name: 'Engraving Machine', price: '£15/day', image: '/assets/img/engraving_machine.jpg', label: 'Engraving Machine' },
  { name: 'DJ Equipment', price: '£50/day', image: '/assets/img/dj_equipment.jpg', label: 'DJ Equipment' },
  { name: 'Stage Lights', price: '£50/day', image: '/assets/img/stage_lighting.jpg', label: 'Stage Lights' },
];

const Listings = () => (
  <section id="listings" className="container mx-auto max-w-screen-2xl py-12 px-4" role="region" aria-labelledby="featured-heading">
    <h3 id="featured-heading" className="text-2xl lg:text-3xl font-semibold text-[#8C2F2B] mb-6 text-center">Featured Equipment</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {listings.map((item, index) => (
        <div key={index} className="bg-white border border-[#E66A32] shadow-sm rounded-lg p-4" role="group" aria-label={item.label}>
          <img src={item.image} alt={item.label} className="rounded mb-4" />
          <h4 className="text-[#8C2F2B] font-semibold text-lg">{item.name}</h4>
          <p className="text-[#2B2B2B] font-medium">{item.price}</p>
          <button className="mt-4 bg-[#C24C30] text-white px-4 py-2 rounded hover:bg-[#8C2F2B] focus:outline focus:ring-2 focus:ring-[#8C2F2B]">View Details</button>
        </div>
      ))}
    </div>
  </section>
);

export default Listings;

