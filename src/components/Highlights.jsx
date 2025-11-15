import React from 'react';

const Highlights = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Why VyomGarud?</h2>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-charcoal rounded-xl border border-gray-700">
          <h3 className="text-xl font-semibold mb-2">AI Navigation</h3>
          <p className="text-gray-400">Advanced autonomy with deep-learning models.</p>
        </div>

        <div className="p-6 bg-charcoal rounded-xl border border-gray-700">
          <h3 className="text-xl font-semibold mb-2">Rugged Build</h3>
          <p className="text-gray-400">Military-grade durability & field testing.</p>
        </div>

        <div className="p-6 bg-charcoal rounded-xl border border-gray-700">
          <h3 className="text-xl font-semibold mb-2">Secure Communication</h3>
          <p className="text-gray-400">End-to-end encrypted long-range systems.</p>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
