import { Link } from "react-router-dom";
import { itineraries } from "../../data/itineraries";

const BlogList = () => {
  // AMBIL CUMA 2 DATA PERTAMA
  const latestPackages = itineraries.slice(0, 2);

  return (
    <section id="blog" className="py-12 bg-[#f5f6f6]">
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold border-b-4 border-travel-pink inline-block pb-2">
            Latest Packages
          </h3>
          <p className="text-gray-500 italic mt-2">
            Pilihan destinasi favorit bulan ini.
          </p>
        </div>

        {/* Grid ini hanya akan menampilkan 2 item karena variable latestPackages di atas */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {latestPackages.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row h-auto md:h-[250px]"
            >
              <div
                className="w-full md:w-1/2 h-[200px] md:h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                <h4 className="text-xl font-bold mb-2">
                  <Link
                    to={`/itinerary/${item.id}`}
                    className="hover:text-travel-pink transition"
                  >
                    {item.title}
                  </Link>
                </h4>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {item.description}
                </p>
                <Link
                  to={`/itinerary/${item.id}`}
                  className="text-travel-pink font-bold mt-4 hover:underline"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol VIEW ALL menuju halaman Packages */}
        <div className="text-center">
          <Link
            to="/packages"
            className="bg-travel-dark text-white py-3 px-8 rounded hover:bg-black transition"
          >
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
