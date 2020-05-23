import React from "react";
import WeatherEngine from "./components/WeatherEngine";
import GeolocalizationEngine from "./components/GeolocalizationEngine";
import Clock from "./components/Clock/component";
import "./App.css";
import StoriesContainerEngine from "./components/StoriesContainerEngine";
function App() {
  return (
    <div className="App">
      <div id="container">
        <div id="header"></div>

        <div id="primary">
          <GeolocalizationEngine />
        </div>
        <div id="secondary">
          <div id="secondary-top">
            <WeatherEngine location="Corsico,It" />
            <WeatherEngine location="New York,Us" />
            <WeatherEngine location="Arenillas,Ec" />
          </div>
          <div id="secondary-bottom">
            <StoriesContainerEngine />
          </div>
        </div>
        <div id="tertiary">
          <Clock></Clock>
        </div>

        <div id="footer"></div>
      </div>
    </div>
  );
}

export default App;
