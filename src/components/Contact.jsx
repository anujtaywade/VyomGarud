import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Us</h2>

      <form className="max-w-xl mx-auto grid gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded bg-black/40 border border-gray-700 text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-black/40 border border-gray-700 text-white"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="p-3 rounded bg-black/40 border border-gray-700 text-white"
        />

        <button className="px-6 py-3 bg-primary text-black font-semibold rounded hover:bg-orange-500 transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
