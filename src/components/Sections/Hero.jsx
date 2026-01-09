const Hero = () => {
  return (
    <header
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/videoSumatra.mp4" type="video/mp4" />
      </video>

      <div className="relative z-20 text-center text-white px-4">
        <h3 className="text-5xl font-bold mb-4">Visit Indonesia</h3>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Ribuan pulau, ratusan budaya, satu destinasi impian. Temukan pesona
          asli Indonesia di sini.
        </p>
        <a
          href="#aboutus"
          className="bg-travel-pink text-white px-6 py-3 rounded hover:bg-pink-700 transition"
        >
          MORE INFO
        </a>
      </div>
    </header>
  );
};

export default Hero;
