import React, { useState } from "react";

const ContactForm = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with an API call
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white max-w-lg w-full mx-4 p-6 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#C24C30] font-bold text-xl"
          aria-label="Close Contact Form"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-[#8C2F2B] mb-4">Contact Us</h2>

        {submitted ? (
          <p className="text-green-700 font-medium">Thanks for reaching out! We'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-sm text-[#2B2B2B]">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-[#C24C30] rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-[#C24C30] rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-[#C24C30] rounded px-3 py-2 h-28 resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#C24C30] text-white px-4 py-2 rounded hover:bg-[#8C2F2B] transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;

