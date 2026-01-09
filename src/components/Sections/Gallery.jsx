import { useEffect, useRef, useState } from "react";
import Popup from "../UI/Popup";
import { galleryData } from "../../data/galleryData";

const Gallery = () => {
  const containerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Ref untuk status "sedang scroll" (mencegah spam)
  const isAnimating = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Setup posisi awal di tengah
    // Timeout kecil memastikan gambar sudah punya ukuran sebelum dihitung
    setTimeout(() => {
      container.scrollLeft = container.scrollWidth / 2;
    }, 100);

    const handleScroll = () => {
      // Ambil ukuran saat ini
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;

      const oneSetWidth = scrollWidth / 2;

      // LOGIKA LOOPING (Teleportasi)
      // Kita beri sedikit 'buffer' (10px) agar tidak terlalu sensitif di ujung
      if (scrollLeft <= 10) {
        container.scrollLeft = oneSetWidth + scrollLeft;
      } else if (scrollLeft >= scrollWidth - clientWidth - 10) {
        container.scrollLeft = scrollLeft - oneSetWidth;
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // FUNGSI NAVIGASI DENGAN ANTI-SPAM
  const scrollGallery = (direction) => {
    // 1. Jika sedang animasi, hentikan (jangan proses klik baru)
    if (isAnimating.current) return;

    if (containerRef.current) {
      // 2. Set status sedang berjalan
      isAnimating.current = true;

      containerRef.current.scrollBy({
        left: direction * 300, // Jarak geser
        behavior: "smooth",
      });

      // 3. Buka kunci tombol setelah 500ms (durasi rata-rata smooth scroll)
      setTimeout(() => {
        isAnimating.current = false;
      }, 500);
    }
  };

  return (
    <section id="gallery" className="py-12 bg-white relative">
      <div className="max-w-[1000px] mx-auto text-center mb-6">
        <h3 className="text-3xl font-bold border-b-4 border-travel-pink inline-block pb-2">
          Our Gallery
        </h3>
      </div>

      <div className="relative w-full max-w-[1200px] mx-auto group px-4">
        {/* Tombol Kiri */}
        <button
          onClick={() => scrollGallery(-1)}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white w-10 h-10 rounded-full hidden md:flex items-center justify-center hover:bg-travel-pink transition active:scale-90"
        >
          &#10094;
        </button>

        {/* Container Scroll */}
        {/* Tambahkan class 'scrollbar-hide' yang sudah kita buat tadi */}
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide py-4"
          style={{ scrollBehavior: "auto" }}
        >
          {/* 2. GUNAKAN DATA DARI FILE IMPORT */}
          {/* Kita tetap menduplikasi array [...data, ...data] agar fitur Infinite Loop bekerja */}
          {[...galleryData, ...galleryData].map((src, index) => (
            <div
              key={index}
              className="min-w-[280px] h-[180px] rounded-lg overflow-hidden shadow-lg flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Tombol Kanan */}
        <button
          onClick={() => scrollGallery(1)}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white w-10 h-10 rounded-full hidden md:flex items-center justify-center hover:bg-travel-pink transition active:scale-90"
        >
          &#10095;
        </button>
      </div>
      {/* Ganti kode popup manual dengan ini: */}
      <Popup src={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
};

export default Gallery;
