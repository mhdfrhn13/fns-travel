import Hero from "../components/Sections/Hero";
import About from "../components/Sections/About";
import Gallery from "../components/Sections/Gallery";
import BlogList from "../components/Sections/BlogList";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />

      {/* Quote Section (Singkat) */}
      <section className="bg-[url('/assets/pagaruyung.jpg')] bg-fixed bg-cover bg-center py-24 text-center">
        <div className="max-w-[1000px] mx-auto bg-white/80 p-10 rounded-lg inline-block">
          <p className="text-2xl font-bold italic text-black">
            "Satu pulau, sejuta cerita. Padukan gemerlap kota, warisan adat, dan
            pesona alam dalam satu perjalanan."
          </p>
        </div>
      </section>

      {/* Team Section (Opsional, bisa dibuat component sendiri jika mau) */}
      <section id="team" className="py-12 text-center bg-white">
        <div className="max-w-[1000px] mx-auto">
          <h3 className="text-3xl font-bold border-b-4 border-travel-pink inline-block pb-2 mb-8">
            Our Team
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
            <div className="bg-white shadow-lg rounded p-4">
              <img src="/assets/tim1.jpg" className="rounded mb-2" />
              <h6>John Doe</h6>
              <span>Indonesia</span>
            </div>
            <div className="bg-white shadow-lg rounded p-4">
              <img src="/assets/tim2.jpg" className="rounded mb-2" />
              <h6>John Brown</h6>
              <span>France</span>
            </div>
            <div className="bg-white shadow-lg rounded p-4">
              <img src="/assets/tim3.jpg" className="rounded mb-2" />
              <h6>Michaell</h6>
              <span>Spain</span>
            </div>
          </div>
        </div>
      </section>

      <BlogList />
    </main>
  );
};

export default Home;
