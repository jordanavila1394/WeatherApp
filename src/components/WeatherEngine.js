import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard/component";
import styled from "@emotion/styled";

const WeatherEngine = ({ location }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  const getWeather = async (q) => {
    setLoading(true);
    try {
      const apiRes = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=66078692e0509c69feafa50ea0fc551f`
      );
      const resJSON = await apiRes.json();
      setWeather({
        temp: resJSON.main.temp,
        city: resJSON.name,
        condition: resJSON.weather[0].main,
        country: resJSON.sys.country,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);


  return (
    <div class="weatherengine">
      {!loading && !error ? (
        <div>
          <form>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            ></input>
            <button onClick={(e) => handleSearch(e)}>Search</button>
          </form>
          <WeatherCard
            city={weather.city}
            country={weather.country}
            temp={weather.temp}
            condition={weather.condition}
          />
        </div>
      ) : loading ? (
        <div style={{ color: "black" }}>Loading</div>
      ) : !loading && error ? (
        <div style={{ color: "black" }}>
          There has been an error!
          <br></br>
          <button onClick={() => setError(false)}>Reset!</button>
        </div>
      ) : null}
    </div>
  );
};
export default WeatherEngine;
