import React from "react";

const benefits = [
  { icon: 'bx-support', label: '24/7 Support' },
  { icon: 'bxs-check-circle', label: 'Verified Equipment' },
  { icon: 'bxs-dollar-circle', label: 'Flexible Pricing' },
  { icon: 'bxs-package', label: 'Free Pickup & Return' },
];

const Benefits = () => (
  <section className="bg-white py-12" role="region" aria-labelledby="why-choose-heading">
    <div className="container mx-auto max-w-screen-2xl text-center px-4">
      <h3 id="why-choose-heading" className="text-2xl lg:text-3xl font-semibold text-[#8C2F2B] mb-6">Why Choose Equiply Pro?</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {benefits.map((item, index) => (
          <div key={index} className="p-4" role="group" aria-label={item.label}>
            <i className={`bx ${item.icon} text-[#8C2F2B] text-4xl mb-2`} aria-hidden="true"></i>
            <p className="text-[#2B2B2B]">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;

