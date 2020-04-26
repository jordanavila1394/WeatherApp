import React from "react";
import { geolocated } from "react-geolocated";
import Coordinates from "./LocalInterface/Coordinates";
import LocalInterfaceEngine from "./LocalInterfaceEngine";

class GeolocalizationEngine extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable ? (
          <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
          <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
             <>
          <Coordinates
            lat={this.props.coords.latitude}
            long={this.props.coords.longitude}
          />
          <LocalInterfaceEngine
          lat={this.props.coords.latitude}
          long={this.props.coords.longitude}
        /></>
        ) : (
          <div>Getting the location data&hellip; </div>
        )
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(GeolocalizationEngine);
