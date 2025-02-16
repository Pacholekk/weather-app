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
      <div className="search-container">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={fetchWeather}> Check weather</button>
      </div>
      {loading && <p>Loading ...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Feels like: {weather.main.feels_like} °C</p>
          <p>
            Humidity: {weather.main.humidity} m<sup>3</sup>{" "}
          </p>
          <p>Wind: {weather.wind.speed} km/h</p>
          <p>{weather.weather[0].description.toUpperCase()}</p>
        </div>
      )}
    </div>
  );
}
export default App;
