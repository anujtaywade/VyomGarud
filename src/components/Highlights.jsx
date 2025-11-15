import React from "react";
import { Cpu, Activity, ShieldCheck } from "lucide-react";

const highlightsData = [
  {
    title: "AI Navigation",
    desc: "Advanced autonomy with deep-learning models.",
    icon: <Cpu size={50} className="text-primary" />,
  },
  {
    title: "Rugged Build",
    desc: "Military-grade durability & field testing.",
    icon: <ShieldCheck size={50} className="text-primary" />,
  },
  {
    title: "Secure Communication",
    desc: "End-to-end encrypted long-range systems.",
    icon: <Activity size={50} className="text-primary" />,
  },
];

const Highlights = () => {
  return (
    <section id="highlights" className="py-32 px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-bold text-center mb-6">
          Why <span className="text-primary">VyomGarud?</span>
        </h2>
        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-20 text-xl">
          VyomGarud offers state-of-the-art UAV capabilities, combining AI precision, rugged design, and secure communications for mission-critical operations.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {highlightsData.map((item, index) => (
            <div
              key={index}
              className="
                p-12
                bg-[#111]/80
                border border-gray-700
                rounded-3xl
                shadow-2xl
                hover:border-primary
                hover:shadow-primary/40
                hover:scale-[1.05]
                transition-all duration-300
                backdrop-blur-md
                text-center
              "
            >
              <div className="mb-6 flex justify-center">{item.icon}</div>
              <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
