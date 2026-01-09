import { useParams, Link } from "react-router-dom";
import { itineraries } from "../data/itineraries";
import { useEffect } from "react";

const ItineraryDetail = () => {
  const { slug } = useParams(); // Mengambil "bromo" atau "yogya" dari URL
  const data = itineraries.find((item) => item.id === slug);

  // Scroll ke atas saat halaman dibuka
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return <div className="text-center py-20">Halaman tidak ditemukan.</div>;
  }

  return (
    <div className="bg-white pb-20">
      {/* Header Image */}
      <header
        className="h-[50vh] bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${data.image})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="text-white text-4xl md:text-5xl font-bold z-10 text-center px-4 drop-shadow-lg">
          {data.title}
        </h1>
      </header>

      {/* Content */}
      <main className="max-w-[1000px] mx-auto px-4 mt-10">
        <Link
          to="/"
          className="text-travel-pink hover:underline mb-4 inline-block"
        >
          &larr; Back to Home
        </Link>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 border-b-4 border-travel-pink inline-block pb-2 mb-4">
            Detail Perjalanan ({data.duration})
          </h3>
          <p className="text-gray-600 text-lg">{data.description}</p>
        </div>

        {/* Loop Hari */}
        <div className="space-y-6">
          {data.days.map((day) => (
            <div
              key={day.day}
              className="bg-gray-50 p-6 rounded-lg border-l-4 border-travel-pink shadow-sm"
            >
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Hari {day.day}: {day.title}
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {day.activities.map((act, idx) => (
                  <li key={idx}>{act}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Button WA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/628123456789"
            target="_blank"
            rel="noreferrer"
            className="bg-travel-pink text-white text-lg font-bold py-3 px-8 rounded shadow-lg hover:bg-pink-700 transition"
          >
            BOOKING SEKARANG
          </a>
        </div>
      </main>
    </div>
  );
};

export default ItineraryDetail;
