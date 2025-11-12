import React from "react";  

const steps = [
  {
    number: '1',
    icon: 'bx-search-alt',
    title: 'Choose Equipment',
    description: 'Browse certified gear from trusted owners.',
  },
  {
    number: '2',
    icon: 'bx-calendar',
    title: 'Select Dates',
    description: 'Pick your rental dates with flexible options.',
  },
  {
    number: '3',
    icon: 'bx-check-shield',
    title: 'Confirm Booking',
    description: 'Secure your booking with deposit protection.',
  },
  {
    number: '4',
    icon: 'bx-package',
    title: 'Collect & Return',
    description: 'Pick up your gear or schedule free delivery.',
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="bg-[#e8b89f] py-12" role="region" aria-labelledby="how-heading">
    <div className="container mx-auto max-w-screen-2xl text-center px-4">
      <h3 id="how-heading" className="text-2xl lg:text-3xl font-semibold text-[#8C2F2B] mb-10">How It Works</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} role="group" aria-label={`Step ${step.number}: ${step.title}`}>
            <div className="bg-[#C24C30] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">
              {step.number}
            </div>
            <i className={`bx ${step.icon} text-[#8C2F2B] text-4xl mb-2`} aria-hidden="true"></i>
            <p className="text-[#8C2F2B] font-semibold">{step.title}</p>
            <p className="text-[#2B2B2B] text-sm mt-1">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
