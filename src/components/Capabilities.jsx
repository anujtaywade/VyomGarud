import React from 'react';

const data = [
  {
    title: "Reconnaissance UAV",
    desc: "Long-range aerial surveillance with encrypted communication.",
  },
  {
    title: "Autonomous Flight System",
    desc: "AI-powered navigation designed for extreme environments.",
  },
  {
    title: "Mission Control Software",
    desc: "Real-time tracking, telemetry and operator interface.",
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-20 px-6 bg-black/40">
      <h2 className="text-4xl font-bold text-center mb-10">
        Capabilities
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {data.map((item, i) => (
          <div
            key={i}
            className="p-6 border border-gray-700 rounded-xl bg-charcoal hover:border-primary transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;
