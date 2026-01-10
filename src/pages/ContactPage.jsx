import React, { useEffect, useState } from "react";
import PageHeader from "../components/UI/PageHeader";

const ContactPage = () => {
  // 1. State untuk menyimpan inputan user
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State untuk status pengiriman (Loading/Sukses/Error)
  const [status, setStatus] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 2. Handle perubahan input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Handle Submit ke Formspree (Tanpa Pindah Halaman)
  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload halaman
    setStatus("sending");

    try {
      // GANTI URL INI DENGAN ID FORMSPREE ANDA (DARI SCREENSHOT)
      const response = await fetch("https://formspree.io/f/xeeejkap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData), // Kirim data sebagai JSON
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white pb-20 pt-[80px]">
      <PageHeader
        title="Hubungi Kami"
        subtitle="Kami Siap Membantu Rencana Perjalanan Anda"
        image="/assets/pagaruyung.jpg" // Contoh pakai gambar lain
      />
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-travel-pink mb-4">
            Contact us
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* KOLOM KIRI: FORMULIR */}
          <div className="space-y-6">
            {/* Tampilkan Pesan Sukses/Error */}
            {status === "success" && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                <strong>Berhasil!</strong> Pesan Anda telah terkirim. Kami akan
                segera menghubungi Anda.
              </div>
            )}
            {status === "error" && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                <strong>Gagal!</strong> Terjadi kesalahan. Silakan coba lagi
                atau hubungi via WhatsApp.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Input Name */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Your Name (required)
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 p-3 rounded focus:outline-none focus:border-travel-pink focus:ring-1 focus:ring-travel-pink transition-colors"
                />
              </div>

              {/* Input Email */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Your Email (required)
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 p-3 rounded focus:outline-none focus:border-travel-pink focus:ring-1 focus:ring-travel-pink transition-colors"
                />
              </div>

              {/* Input Subject */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 p-3 rounded focus:outline-none focus:border-travel-pink focus:ring-1 focus:ring-travel-pink transition-colors"
                />
              </div>

              {/* Input Message */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 p-3 rounded focus:outline-none focus:border-travel-pink focus:ring-1 focus:ring-travel-pink transition-colors"
                ></textarea>
              </div>

              {/* Tombol Kirim */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-travel-pink text-white font-bold py-3 px-8 rounded hover:bg-opacity-90 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>

          {/* KOLOM KANAN: INFO KONTAK & SOSMED (TETAP SAMA) */}
          <div className="space-y-8 md:pl-10 border-l border-gray-100">
            <div>
              <h3 className="text-2xl font-serif font-bold text-travel-pink mb-4">
                Contact us
              </h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  <span className="font-bold text-travel-dark">Email :</span>{" "}
                  fnsholiday@gmail.com
                </p>
                <p>
                  <span className="font-bold text-travel-dark">
                    Whatsapp/phone :
                  </span>{" "}
                  +62 853-6596-8845
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-travel-pink mb-4">
                Follow us on social media
              </h3>
              <div className="flex gap-4">
                {/* Facebook */}
                <a
                  href="#"
                  className="bg-[#3b5998] text-white p-3 rounded hover:opacity-80 transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white p-3 rounded hover:opacity-80 transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* Youtube */}
                <a
                  href="#"
                  className="bg-[#FF0000] text-white p-3 rounded hover:opacity-80 transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
