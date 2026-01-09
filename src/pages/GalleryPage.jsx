import { useState, useEffect } from "react";
import Popup from "../components/UI/Popup";
import { galleryData } from "../data/galleryData";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Scroll ke atas otomatis saat halaman dibuka
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pb-20 pt-[100px]">
      {/* HEADER */}
      <div className="max-w-[1200px] mx-auto px-4 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-travel-dark mb-4">
          Our Complete Gallery
        </h1>
        <p className="text-gray-500 italic text-lg max-w-2xl mx-auto">
          Kumpulan momen indah dari perjalanan para traveler bersama FnS Tour
          and Travel.
        </p>
      </div>

      {/* GRID GALLERY CONTAINER */}
      <div className="max-w-[1200px] mx-auto px-4">
        {/* PERHATIKAN BAGIAN INI:
           grid-cols-1 = 1 Gambar per baris (HP)
           md:grid-cols-3 = 3 Gambar per baris (Tablet/Laptop Kecil)
           lg:grid-cols-4 = 4 Gambar per baris (Layar Besar)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryData.map((src, index) => (
            <div
              key={index}
              className="relative group h-[250px] overflow-hidden rounded-xl shadow-md cursor-pointer hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(src)}
            >
              {/* GAMBAR */}
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />

              {/* OVERLAY HITAM SAAT HOVER */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-4xl font-light transform scale-50 group-hover:scale-100 transition-transform duration-300">
                  +
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP COMPONENT */}
      <Popup src={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
};

export default GalleryPage;
