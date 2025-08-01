import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
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
  const { cityName } = useParams();
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const weatherRes = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}&lang=it`
        );
        if (!weatherRes.ok) throw new Error("Errore nel meteo attuale");
        const weatherData = await weatherRes.json();

        const forecastRes = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${API_KEY}&lang=it`
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
  }, [cityName]);

  // La gestione dell'errore funziona, ho provato a cambiare la key

  if (error) {
    return (
      <div className="p-4">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  if (!weather) return <div className="p-4">Caricamento...</div>;

  return (
    <div className="p-4 container">
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Meteo attuale a {weather.name}</Card.Title>
          <Card.Text>
            {getWeatherIcon(weather.weather[0].description)}
            {weather.weather[0].description}
          </Card.Text>
          <Card.Text>Temperatura: {weather.main.temp}°C</Card.Text>
          <Card.Text>Umidità: {weather.main.humidity}%</Card.Text>
        </Card.Body>
      </Card>

      <div className="row">
        {forecast.map((item) => (
          <div className="col-md-2 mb-3" key={item.dt}>
            <Card>
              <Card.Body>
                <Card.Title style={{ fontSize: "1rem" }}>
                  {new Date(item.dt_txt).toLocaleDateString("it-IT", {
                    weekday: "long",
                  })}{" "}
                  -{" "}
                  {new Date(item.dt_txt).toLocaleTimeString("it-IT", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Card.Title>
                <Card.Text>
                  {getWeatherIcon(item.weather[0].description)}
                  {item.weather[0].description}
                </Card.Text>
                <Card.Text>{item.main.temp}°C</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetail;
