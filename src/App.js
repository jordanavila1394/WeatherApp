import React from "react";
import WeatherEngine from "./components/WeatherEngine";
import "./App.css";
function App() {
  return (
    <div className="App">
      <WeatherEngine location="Milan,it" />
      <WeatherEngine location="Venice,it" />
      <WeatherEngine location="Rome,it" />
      <WeatherEngine location="Rome,it" />
    </div>
  );
}

export default App;
