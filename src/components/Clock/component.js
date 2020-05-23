import React from "react";
import Clock from 'react-live-clock';

import styled from "@emotion/styled";
const Container = styled.h2`
  
  background: inherit;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  color: white;
  padding: 15px;
  text-align: center;
`;
class Time extends React.Component {
    
  render() {
    return (
      <Container>
        <Clock format={"HH:mm:ss"} ticking={true} /><br></br>
        <Clock format={"A"} ticking={true} />
      </Container>
    );
  }
}

export default Time;
