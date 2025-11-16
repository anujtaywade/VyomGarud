import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">

    
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

   
      <div className="absolute inset-0 bg-black/70"></div>

    
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-orange-600">
          Vyom<span className="text-primary">Garud</span>
        </h1>

        <p className="text-lg md:text-2xl mb-6 text-gray-300">
          Military-grade UAV systems with precision, autonomy & reliability.
        </p>

        <a
          href="#about"
          className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-orange-500 transition border-1"
        >
          Explore Systems
        </a>
      </div>
    </div>
  );
};

export default Hero;
