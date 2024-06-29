import React, { useEffect, useState } from "react";
import Weather from "./Weather";
import SearchBar from "./SearchBar";
import './style.css'

const API_KEY = "f76f7b28feb05035c14e171bd8d2ef39";
const DEFAULT_CITY = "Delhi";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (city = DEFAULT_CITY) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(); // Initial fetch for default city
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Weather data={weatherData} />
      <SearchBar fetchWeather={fetchWeatherData} />
    </div>
  );
}

export default App;
