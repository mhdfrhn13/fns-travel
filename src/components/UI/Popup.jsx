import React from "react";

const Popup = ({ src, onClose }) => {
  if (!src) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
      {/* 1. LAYER BACKGROUND (Klik untuk tutup) */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-fade-in transition-opacity"
        onClick={onClose}
      ></div>

      {/* 2. LAYER KONTEN (Maximal 95% Lebar & 90% Tinggi Layar) */}
      <div className="relative z-10 animate-zoom-in max-w-[95vw] w-full flex justify-center items-center">
        <div className="relative inline-block">
          {/* GAMBAR */}
          <img
            src={src}
            alt="Popup View"
            className="max-w-full max-h-[90vh] rounded shadow-2xl object-contain border border-white/10 block mx-auto"
            onClick={(e) => e.stopPropagation()}
          />

          {/* TOMBOL CLOSE (Floating di pojok kanan atas gambar) */}
          <button
            className="absolute -top-4 -right-4 bg-white text-black hover:bg-travel-pink hover:text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:rotate-90 z-20 cursor-pointer"
            onClick={onClose}
            title="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
