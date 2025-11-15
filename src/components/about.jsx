import { useEffect, useState } from "react";
import React from "react";

const Counter = ({ target, title }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const speed = 30;

    const timer = setInterval(() => {
      start += 1;
      if (start >= end) clearInterval(timer);
      setCount(start);
    }, speed);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="text-center p-5 bg-black/40 border border-gray-700 rounded-xl">
      <h3 className="text-4xl font-bold text-primary">{count}+</h3>
      <p className="text-gray-300 mt-1">{title}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">

    
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bg-v-2.mp4" type="video/mp4" />
      </video>

  
      <div className="absolute inset-0 bg-black/70"></div>

     
      <div className="relative z-10 max-w-6xl mx-auto bg-black/50 p-10 rounded-xl">

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-4xl font-bold mb-4 text-white">
              About <span className="text-primary">VyomGarud</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              VyomGarud is a next-generation UAV technology company focused on
              building highly autonomous, mission-ready aerial systems for
              defense, surveillance, and strategic intelligence operations.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Our drones combine rugged aerospace engineering with powerful
              onboard AI systems, enabling precise navigation, long-range
              intelligence gathering, and real-time tactical decision support
              in the toughest environments.
            </p>

            <div className="mt-6 p-5 bg-black/60 border-l-4 border-primary rounded">
              <p className="text-gray-200 text-md leading-relaxed">
                We are committed to pushing the boundaries of autonomous flight
                and delivering UAV platforms that enhance situational awareness,
                protect lives, and support critical missions with unmatched
                reliability.
              </p>
            </div>
          </div>

        
          <div className="grid grid-cols-2 gap-6 text-white">
            <Counter target={150} title="Successful Deployments" />
            <Counter target={20} title="Defense Partnerships" />
            <Counter target={98} title="System Reliability (%)" />
            <Counter target={12} title="Autonomous UAV Models" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
