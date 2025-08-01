import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../assets/css/body.css";
import Container from "react-bootstrap/Container";

const HomePage = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  // useNavigate è molto comodo in questo caso
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") localStorage.setItem("lastCity", city);
    // Questo per la pagina di dettaglio, in modo che abbia qualche cosa dentro
    navigate(`/dettagli/${encodeURIComponent(city)}`);
    // Anche questa encodeURIComponent(city) davvero comoda per evitare problemi con gli spazi nei nomi di città tipo San Topogigio
  };

  return (
    <main>
      <h1 className="text-center pt-5">Il Meteo che ci piace</h1>
      <p className="text-center mt-5">Sogni una vacanza senza pioggia?</p>
      <p className="text-center mt-5">Sei nel posto sbagliato.</p>
      <Container className="min-h-screen d-flex align-items-center justify-content-center p-4">
        <form
          onSubmit={handleSubmit}
          className="w-100"
          style={{ maxWidth: "400px" }}
        >
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Inserisci il nome della città"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" className="w-100">
            Controlla il meteo
          </Button>
        </form>
      </Container>
    </main>
  );
};

export default HomePage;
