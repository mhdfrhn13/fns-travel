import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Deteksi scroll untuk ubah warna navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Jika di halaman detail (bukan home), navbar selalu putih/solid
  const isHomePage = location.pathname === "/";
  const navbarClass =
    isHomePage && !isScrolled
      ? "bg-transparent text-white"
      : "bg-white text-travel-dark shadow-md";

  // Logo logic (tukar logo putih/hitam)
  const showWhiteLogo = isHomePage && !isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${navbarClass}`}
    >
      <div className="max-w-[1000px] mx-auto flex justify-between items-center h-[60px] px-4">
        {/* Logo */}
        <div className="logo">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {showWhiteLogo ? (
              <img
                src="/assets/logo-white.png"
                alt="Logo White"
                className="w-[120px]"
              />
            ) : (
              <img
                src="/assets/logo-black.png"
                alt="Logo Black"
                className="w-[120px]"
              />
            )}
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {[
            "Home",
            "About Us",
            "Packages",
            "Gallery",
            "Team",
            "Blog",
            "Contact",
          ].map((item) => (
            <li key={item}>
              {item === "Packages" ? (
                <Link
                  to="/packages"
                  className="hover:underline hover:text-travel-pink transition"
                >
                  {item}
                </Link>
              ) : (
                <a
                  href={`/#${item.toLowerCase().replace(" ", "")}`}
                  className="hover:underline hover:text-travel-pink transition"
                >
                  {item}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-between h-[20px] w-[30px]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span
            className={`h-[3px] w-full transition ${
              showWhiteLogo ? "bg-white" : "bg-gray-800"
            }`}
          ></span>
          <span
            className={`h-[3px] w-full transition ${
              showWhiteLogo ? "bg-white" : "bg-gray-800"
            }`}
          ></span>
          <span
            className={`h-[3px] w-full transition ${
              showWhiteLogo ? "bg-white" : "bg-gray-800"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <ul className="md:hidden absolute top-[60px] left-0 w-full bg-white shadow-lg flex flex-col">
          {[
            "Home",
            "About Us",
            "Packages",
            "Gallery",
            "Team",
            "Blog",
            "Contact",
          ].map((item) => (
            <li key={item} className="border-b border-gray-200">
              {item === "Packages" ? (
                <Link
                  to="/packages"
                  className="block py-3 px-4 text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ) : (
                <a
                  href={`/#${item.toLowerCase().replace(" ", "")}`}
                  className="block py-3 px-4 text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
