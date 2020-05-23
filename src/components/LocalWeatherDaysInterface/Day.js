import React from "react";
import styled from "@emotion/styled";

const Day = (props) => {
  const Container = styled.div`
    text-align: center;
  `;
  const Title = styled.h4`
    font-family: "Merriweather", sans-serif;
    margin: 10px;
  `;

  return (
    <Container>
      <Title>{props.day}</Title>
    </Container>
  );
};

export default Day;
