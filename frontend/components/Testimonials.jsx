import React from "react";  

const testimonials = [
  {
    quote: 'Reliable gear and smooth booking process. Highly recommend! I was able to find exactly what I needed, trusted the platform completely. The process was seamless from start to finish, and the price was unbeatable.',
    author: '— Alex, Videographer',
  },
  {
    quote: 'I had a fantastic experience renting equipment from this platform. The selection was impressive, and the customer service was top-notch.',
    author: '— Jamie, Photographer',
  },
];

const Testimonials = () => (
  <section className="bg-white py-12" role="region" aria-labelledby="testimonials-heading">
    <div className="container mx-auto max-w-screen-2xl text-center px-4">
      <h3 id="testimonials-heading" className="text-2xl lg:text-3xl font-semibold text-[#8C2F2B] mb-6">What Our Users Say</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((item, index) => (
          <blockquote key={index} className="bg-[#2B2B2B] text-[#E66A32] italic shadow-md rounded-lg p-6" aria-label={`Testimonial from ${item.author}`}>
            “{item.quote}”
            <cite className="block text-[#C24C30] font-semibold mt-2">{item.author}</cite>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
