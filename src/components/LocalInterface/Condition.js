import React from "react";
import styled from "@emotion/styled";

const Condition = ({condition }) => {
  
  const State = styled.h2`
    font-family: "Fira Sans", sans-serif;
    font-size: 2em;
    font-weight: 200;
  `;
  return (
    <>
      <State>{condition}</State>
    </>
  );
};

export default Condition;
