import React from "react";
import styled from "@emotion/styled";

const Temperature = (props) => {
  const Temp = styled.h2`
    font-family: "Fira Sans", sans-serif;
    font-size: 4em;
    font-weight: 200;
  `;
  const TempMin = styled.h2`
    font-family: "Fira Sans", sans-serif;
    font-size: 1em;
    font-weight: 200;
    margin: 10px;
    text-align: center;
  `;
  const TempMax = styled.h2`
    font-family: "Fira Sans", sans-serif;
    font-size: 1em;
    font-weight: 200;
    margin: 10px;
    text-align: center;
  `;

  return (
    <>
      <Temp>{props.temp} °C</Temp>
      <div id="temperatures">
        <TempMin>Min: {props.tempmin} °C </TempMin>
        <TempMax>Max: {props.tempmax} °C </TempMax>
      </div>
    </>
  );
};

export default Temperature;
