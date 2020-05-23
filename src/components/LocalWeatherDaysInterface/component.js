import React from "react";
import styled from "@emotion/styled";
import Day from "./Day";
import Condition from "./Condition";
import Temperature from "./Temperature";
import Icon from "./Icon";
import { mapDay } from "../mappers/mapDay";

const LocalWeatherDaysInterface = (props) => {
  const Interface = styled.div`
    margin: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;
  return (
    <Interface>
      <Day day={mapDay(props.day)}></Day>
      <Icon condition={props.condition} />
      <Temperature
        temp={props.temp}
        tempmin={props.tempmin}
        tempmax={props.tempmax}
      />
      <Condition condition={props.condition}></Condition>
    </Interface>
  );
};

export default LocalWeatherDaysInterface;
