import { useState } from "react";
import { WeatherData } from "./types/weather";

import "./App.css";

function App() {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("Coulnd't find a city");
      }
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Eror has occur");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="App">
      <h1>Weather</h1>
    </div>
  );
}
export default App;
