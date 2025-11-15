const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 bg-[url('https://images.unsplash.com/photo-1523961131990-5ea7c61b2107')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Vyom<span className="text-primary">Garud</span>
        </h1>

        <p className="text-lg md:text-2xl mb-6 text-gray-300">
          Military-grade UAV systems with precision, autonomy & reliability.
        </p>

        <a
          href="#about"
          className="px-8 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-orange-500 transition"
        >
          Explore Systems
        </a>
      </div>
    </section>
  );
};

export default Hero;
