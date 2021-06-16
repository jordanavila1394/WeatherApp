import React, { useState, useEffect } from "react";
import LocalInterface from "./LocalInterface/component";

const LocalInterfaceEngine = (props) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
    humidity: null,
    tempmax: null,
    tempmin: null,
  });

  const getWeather = async (lat, long) => {
    setLoading(true);
    try {
      const apiRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=66078692e0509c69feafa50ea0fc551f`
      );
      const resJSON = await apiRes.json();
      console.log(resJSON);
      setWeather({
        temp: resJSON.main.temp,
        city: resJSON.name,
        condition: resJSON.weather[0].main,
        country: resJSON.sys.country,
        humidity: resJSON.main.humidity,
        tempmax: resJSON.main.temp_max,
        tempmin: resJSON.main.temp_min,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getWeather(props.lat, props.long);
    }
    return () => (mounted = false);
  }, [props.lat, props.long]);

  return (
    <div>
      {!loading && !error ? (
        <div>
          <LocalInterface
            city={weather.city}
            country={weather.country}
            temp={weather.temp}
            tempmin={weather.tempmin}
            tempmax={weather.tempmax}
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
export default LocalInterfaceEngine;
