import React from "react";
import styled from "@emotion/styled";

const Temperature = (props) => {
  const Temp = styled.h4`
    font-family: "Fira Sans", sans-serif;
    font-weight: 200;
  `;
  const TempMin = styled.h5`
    font-family: "Fira Sans", sans-serif;
    font-weight: 200;
    text-align: center;
    margin: 10px;
    text-align: center;
  `;
  const TempMax = styled.h5`
    font-family: "Fira Sans", sans-serif;
    font-weight: 200;
    text-align: center;
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
