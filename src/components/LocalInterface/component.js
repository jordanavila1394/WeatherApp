import React from "react";
import styled from "@emotion/styled";
import Location from "./Location";
import Condition from "./Condition";
import Temperature from "./Temperature";
import Icon from "./Icon";

const LocalInterface = (props) => {
  const Interface = styled.div`
    margin-top: 5px;
    color: white;
    height: 420px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;
  return (
    <Interface>
      <Location city={props.city} country={props.country} />
      <Temperature
        temp={props.temp}
        tempmin={props.tempmin}
        tempmax={props.tempmax}
      />
      <Icon condition={props.condition} />
      <Condition condition={props.condition} />
    </Interface>
  );
};

export default LocalInterface;
