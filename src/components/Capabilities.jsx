import React from "react";
import { ShieldCheck, Radar, Cpu, Activity } from "lucide-react"; 

const capabilities = [
  {
    title: "Reconnaissance UAV Systems",
    desc: "Long-range surveillance drones equipped with encrypted communication and night-vision capabilities.",
    icon: <Radar size={40} className="text-primary" />,
  },
  {
    title: "Autonomous Flight Intelligence",
    desc: "AI-powered onboard systems for fully autonomous navigation, obstacle detection, and mission execution.",
    icon: <Cpu size={40} className="text-primary" />,
  },
  {
    title: "Mission Control Command Suite",
    desc: "A tactical control interface offering live telemetry, multi-UAV monitoring, and secure command relay.",
    icon: <Activity size={40} className="text-primary" />,
  },
  {
    title: "Defense-Grade Build Quality",
    desc: "Rugged aerospace-grade engineering designed to perform in harsh terrains and extreme weather conditions.",
    icon: <ShieldCheck size={40} className="text-primary" />,
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-28 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        
     
        <h2 className="text-5xl font-bold text-center mb-4">
          Our <span className="text-primary">Capabilities</span>
        </h2>
        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          VyomGarud delivers cutting-edge UAV systems engineered for mission-critical 
          performance, tactical intelligence, and real-time operational dominance.
        </p>

     
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="
                p-10 
                bg-[#111]/70 
                border border-gray-700 
                rounded-2xl 
                shadow-xl
                hover:border-primary
                hover:shadow-primary/20
                hover:scale-[1.03]
                transition-all duration-300
                backdrop-blur-sm
              "
            >
              <div className="mb-5">{cap.icon}</div>

              <h3 className="text-2xl font-semibold mb-3">
                {cap.title}
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Capabilities;
