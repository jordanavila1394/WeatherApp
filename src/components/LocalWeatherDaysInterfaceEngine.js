import React, { useState, useEffect } from "react";
import LocalWeatherDaysInterface from "./LocalWeatherDaysInterface/component";
import styled from "@emotion/styled";

const LocalWeatherDaysInterfaceEngine = (props) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [firstDay, setFirstDay] = useState({
    day: null,
    temp: null,
    tempmax: null,
    tempmin: null,
    condition: null,
  });
  const [secondDay, setSecondDay] = useState({
    day: null,
    temp: null,
    tempmax: null,
    tempmin: null,
    condition: null,
  });
  const [thirdDay, setThirdDay] = useState({
    day: null,
    temp: null,
    tempmax: null,
    tempmin: null,
    condition: null,
  });
  const getWeatherDays = async (lat, long) => {
    setLoading(true);
    try {
      const apiRes = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=66078692e0509c69feafa50ea0fc551f`
      );
      const resJSON = await apiRes.json();
      setFirstDay({
        day: resJSON.daily[1].dt,
        temp: resJSON.daily[1].temp.day,
        tempmax: resJSON.daily[1].temp.max,
        tempmin: resJSON.daily[1].temp.min,
        condition: resJSON.daily[1].weather[0].main,
      });
      setSecondDay({
        day: resJSON.daily[2].dt,
        temp: resJSON.daily[2].temp.day,
        tempmax: resJSON.daily[2].temp.max,
        tempmin: resJSON.daily[2].temp.min,
        condition: resJSON.daily[2].weather[0].main,
      });
      setThirdDay({
        day: resJSON.daily[3].dt,
        temp: resJSON.daily[3].temp.day,
        tempmax: resJSON.daily[3].temp.max,
        tempmin: resJSON.daily[3].temp.min,
        condition: resJSON.daily[3].weather[0].main,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getWeatherDays(props.lat, props.long);
    }
    return () => (mounted = false);
  }, [props.lat, props.long]);
const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
  return (
    <div>
      {!loading && !error ? (
        <Container>
          <LocalWeatherDaysInterface
            day={firstDay.day}
            temp={firstDay.temp}
            tempmin={firstDay.tempmin}
            tempmax={firstDay.tempmax}
            condition={firstDay.condition}
          />
          <LocalWeatherDaysInterface
            day={secondDay.day}
            temp={secondDay.temp}
            tempmin={secondDay.tempmin}
            tempmax={secondDay.tempmax}
            condition={secondDay.condition}
          />
          <LocalWeatherDaysInterface
            day={thirdDay.day}
            temp={thirdDay.temp}
            tempmin={thirdDay.tempmin}
            tempmax={thirdDay.tempmax}
            condition={thirdDay.condition}
          />
        </Container>
      ) : loading ? (
        <div>Loading</div>
      ) : !loading && error ? (
        <div>
          There has been an error!
          <br></br>
          <button onClick={() => setError(false)}>Reset!</button>
        </div>
      ) : null}
    </div>
  );
};
export default LocalWeatherDaysInterfaceEngine;
