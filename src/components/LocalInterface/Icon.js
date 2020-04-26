import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
  const Icon = styled.img`
  `;

  var icon = "";
  switch (props.condition) {
    case "Clouds":
      icon = `./img/Mostly Cloudy-4x.png`;
      break;
    case "Clear":
      icon = `./img/Mostly Sunny-4x.png`;
      break;
    case "Haze":
      icon = `./img/Haze-4x.png`;
      break;
    case "Hail":
      icon = `./img/Hail-4x.png`;
      break;
    case "Fog":
      icon = `./img/Fog-4x.png`;
      break;
    case "Tornado":
      icon = `./img/Tornado-4x.png`;
      break;
    case "Dust":
      icon = `./img/Dust-4x.png`;
      break;
    case "Mist":
      icon = `./img/Fog-4x.png`;
      break;
    case "Snow":
      icon = `./img/Snow-4x.png`;
      break;
    case "Rain":
      icon = `./img/Rain-4x.png`;
      break;
    case "Drizzle":
      icon = `./img/Drizzle-4x.png`;
      break;
    case "Thunderstorm":
      icon = `./img/Severe Thunderstorm-4x.png`;
      break;
    default:
      icon = `./img/Fog-4x.png`;
      break;
  }
  return <Icon src={icon} alt="Weather Icon" />;
};

export default Icon;
