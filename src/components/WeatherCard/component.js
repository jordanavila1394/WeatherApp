import React from "react";
import styled from "@emotion/styled";
import Location from "./Location";
import Condition from "./Condition";
import Icon from "./Icon";

const WeatherCard = (props) => {
  const red = 100;
  const Card = styled.div`
    margin: 0 auto;
    background: linear-gradient(
      183deg,
      rgba(${red}, 60, 255, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
    width: 200px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;
  return (
    <Card>
      <Location />
      <Icon />
      <Condition />
    </Card>
  );
};

export default WeatherCard;
