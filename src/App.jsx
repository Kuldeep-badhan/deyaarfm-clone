import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/AboutUs/About";
import Carrers from "./pages/Carrers/Carrers";
import Contact from "./pages/Contact/Contact";
import MediaCenter from "./pages/MediaCenter/MediaCenter";
import Services from "./pages/Services/Services";
import Sustainability from "./pages/Sustainability/Sustainability";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrers" element={<Carrers />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/about-us/:path" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:path" element={<Services />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/sustainability/:path" element={<Sustainability />} />
          <Route path="/press-release" element={<MediaCenter />} />
          <Route path="/press-kit-dfm" element={<MediaCenter />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
