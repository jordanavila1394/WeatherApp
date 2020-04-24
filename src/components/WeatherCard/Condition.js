import React from "react";
import styled from "@emotion/styled";

const Condition = (props) => {
  const Temp = styled.h1`
    font-family: "Fira Sans", sans-serif;
    font-size: 2em;
    font-weight: 200;
  `;
  const State = styled.h3`
    font-family: "Fira Sans", sans-serif;
  `;
  return (
    <>
      <Temp>20 °C</Temp>
      <State>AU</State>
    </>
  );
};

export default Condition;
