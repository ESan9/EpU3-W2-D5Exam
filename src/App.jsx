import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import WeatherPage from "./components/WeatherPage";
import NavbarMeteo from "./components/NavbarMeteo";
import FooterMeteo from "./components/FooterMeteo";
import WeatherDetail from "./components/WeatherDetail";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <NavbarMeteo />
      {/* Implemento il Route anche se non l'ho capito benissimo, però funziona */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/weather/:city" element={<WeatherPage />} />
        <Route path="/dettagli/:city" element={<WeatherDetail />} />
        <Route path="/preferiti/:city" element={<WeatherDetail />} />
      </Routes>
      <FooterMeteo />
    </Router>
  );
}
