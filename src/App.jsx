import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import ItineraryDetail from "./pages/ItineraryDetail";
import Packages from "./pages/Packages";
import GalleryPage from "./pages/GalleryPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/itinerary/:slug" element={<ItineraryDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
