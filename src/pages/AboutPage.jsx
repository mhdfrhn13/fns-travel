import React, { useEffect } from "react";
import PageHeader from "../components/UI/PageHeader";
import Reveal from "../components/UI/Reveal";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // 1. Wrapper Utama: HANYA background, JANGAN kasih padding/max-width di sini
    <div className="bg-white min-h-screen">
      {/* 2. Banner: Diletakkan PALING ATAS (Di luar container konten) */}
      <PageHeader
        title="Tentang Kami"
        subtitle="Mengenal Lebih Dekat FnS Tour and Travel"
        image="/assets/blog1.jpg"
      />

      {/* 3. Container Konten: Baru di sini kita kasih batas lebar (max-w) & padding (px-6) */}
      <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal direction="left">
            <div className="relative group">
              <div className="absolute -inset-2 bg-travel-pink/20 rounded-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
              <img
                src="/assets/blog1.jpg"
                alt="Tentang FnS Travel"
                className="relative w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-xl z-10"
              />
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="space-y-6 text-gray-600 text-justify leading-relaxed font-sans text-lg">
              <p>
                <strong className="text-travel-dark text-xl">
                  FnS Tour and Travel
                </strong>{" "}
                adalah penyedia jasa perjalanan wisata dan rental kendaraan
                terpercaya yang berlokasi di Sumatera Barat. Berdiri dengan
                semangat untuk memperkenalkan keindahan alam Nusantara, kami
                telah melayani ribuan wisatawan domestik maupun mancanegara.
              </p>

              <p>
                Bermula dari layanan transportasi sederhana, kini kami
                berkembang menjadi agen perjalanan komprehensif. Kami menyajikan
                paket-paket wisata yang dirancang secara apik guna memenuhi
                kepuasan pelanggan, mulai dari wisata alam, budaya, hingga
                kuliner.
              </p>

              <p>
                Selain paket wisata,{" "}
                <strong className="text-travel-dark">FnS Tour</strong> juga
                menawarkan layanan sewa mobil untuk keperluan dinas, kunjungan
                kerja, gathering keluarga, hingga private tour. Armada kami
                selalu dalam kondisi prima, bersih, dan didukung oleh kru yang
                ramah serta berpengalaman.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
