import React from "react";
import styled from "@emotion/styled";

const Condition = (props) => {
  
  const State = styled.h2`
    font-family: "Fira Sans", sans-serif;
    font-weight: 200;
  `;
  return (
    <>
      <State>{props.condition}</State>
    </>
  );
};

export default Condition;
