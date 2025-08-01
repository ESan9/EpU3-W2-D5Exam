import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { BsCloudRain, BsSun, BsClouds, BsCloud } from "react-icons/bs";

const API_KEY = "2c32ac7e6b365af5bae9fbb5fc2d6712";

const getWeatherIcon = (description) => {
  if (description.includes("pioggia")) return <BsCloudRain className="me-2" />;
  if (description.includes("nubi")) return <BsClouds className="me-2" />;
  if (description.includes("coperto")) return <BsClouds className="me-2" />;
  if (description.includes("nuvole")) return <BsCloud className="me-2" />;
  if (description.includes("sereno")) return <BsSun className="me-2" />;
  return null;
};

const WeatherDetail = () => {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const weatherRes = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=it`
        );
        if (!weatherRes.ok) throw new Error("Errore nel meteo attuale");
        const weatherData = await weatherRes.json();

        const forecastRes = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}&lang=it`
        );
        if (!forecastRes.ok) throw new Error("Errore nelle previsioni");
        const forecastData = await forecastRes.json();

        setWeather(weatherData);
        setForecast(forecastData.list);
        setError(null);
      } catch (err) {
        console.error("Errore durante il fetch:", err);
        setError("Città non trovata o errore nella rete.");
        setWeather(null);
        setForecast([]);
      }
    }

    fetchData();
  }, [city]);

  // La gestione dell'errore funziona, ho provato a cambiare la key

  if (error) {
    return (
      <div className="p-4">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  // Sto cercando un modo per fare in modo di mettere le card divise per giorno, probabilmente con filter,
  // però non mi viene in mente nulla di semplice e non ho tanto tempo

  if (!weather) return <div className="p-4">Caricamento...</div>;

  return (
    <Container className="my-4 text-center text-lg-start">
      <h2>Meteo Attuale a {weather.name}</h2>
      <Card style={{ border: "none" }}>
        <Card.Body className="border-0">
          <Card.Text className="text-capitalize">
            {getWeatherIcon(weather.weather[0].description)}
            {weather.weather[0].description}
          </Card.Text>
          <Card.Text>🌡️ Temperatura: {weather.main.temp}°C</Card.Text>
          <Card.Text>💧 Umidità: {weather.main.humidity}%</Card.Text>
        </Card.Body>
      </Card>

      <Row>
        <h3 className="my-4 text-center text-lg-start">
          Previsioni ogni tre ore
        </h3>
        {forecast.map((item) => (
          <Col className="col-md-2 mb-3" key={item.dt}>
            <Card>
              <Card.Body>
                <Card.Title
                  className="text-capitalize"
                  style={{ fontSize: "1rem" }}
                >
                  {new Date(item.dt_txt).toLocaleDateString("it-IT", {
                    weekday: "long",
                  })}{" "}
                  -{" "}
                  {new Date(item.dt_txt).toLocaleTimeString("it-IT", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Card.Title>
                <Card.Text className="text-capitalize">
                  {getWeatherIcon(item.weather[0].description)}
                  {item.weather[0].description}
                </Card.Text>
                <Card.Text>{item.main.temp}°C</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WeatherDetail;
