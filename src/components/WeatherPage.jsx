import { useParams } from "react-router-dom";
import WeatherDetail from "./WeatherDetail";

// Per maggiore comodità freeCodeCamp Power

const WeatherPage = () => {
  const { city } = useParams();
  return <WeatherDetail city={city} />;
};

export default WeatherPage;
