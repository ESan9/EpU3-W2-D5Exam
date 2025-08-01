import { useParams } from "react-router-dom";
import WeatherDetail from "./WeatherDetail";

export default function WeatherPage() {
  const { city } = useParams();
  return <WeatherDetail city={city} />;
}
