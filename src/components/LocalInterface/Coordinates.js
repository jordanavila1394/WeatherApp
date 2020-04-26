import React from "react";
import styled from "@emotion/styled";

const Coordinates = ({ lat, long }) => {

  const Lat = styled.h2`
    font-family: "Fira Sans", sans-serif;
    font-size: 1em;
    font-weight: 200;
    margin: 10px;
    text-align: center;
  `;
  const Long = styled.h2`
    font-family: "Fira Sans", sans-serif;
    font-size: 1em;
    font-weight: 200;
    margin: 10px;
    text-align: center;
  `;
  return (
    <div id="coordinates">
      <Lat>
        Latitude: {lat}
      </Lat>
      <Long>Longitude: {long}</Long>
    </div>
  );
};

export default Coordinates;
