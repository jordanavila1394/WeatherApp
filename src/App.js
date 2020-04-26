import React from "react";
import WeatherEngine from "./components/WeatherEngine";
import GeolocalizationEngine from "./components/GeolocalizationEngine";

import "./App.css";
function App() {
  return (
    <div className="App">
      <div id="container">
        <div id="header">
        </div>

        <div id="primary">
          <GeolocalizationEngine />
        </div>
        <div id="secondary">
          
          <div id="secondary-top">
            <WeatherEngine location="Corsico,It" />
            <WeatherEngine location="New York,Us" />
            <WeatherEngine location="Arenillas,Ec" />
          </div>
          <div id="secondary-bottom"></div>
        </div>
        <div id="tertiary">
        </div>

        <div id="footer">
        </div>
      </div>
    </div>
  );
}

export default App;
