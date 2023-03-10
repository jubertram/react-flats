import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';

import flats from "../../data/flats";
import FlatList from "./flat_list";
import Marker from "./marker";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats,
      selectedFlat: flats[0],
    };
  }

  select = (index) => {
    this.setState({ selectedFlat: flats[index] });
  };

  center() {
    const { selectedFlat } = this.state;
    return {
      lat: selectedFlat.lat,
      lng: selectedFlat.lng
    };
  }

  render() {
    const { selectedFlat } = this.state;
    return (
      <div>
        <div className="flat-list">
          <FlatList
            flats={flats}
            select={this.select}
            selectedFlat={selectedFlat}
          />
        </div>
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
            <Marker lat={selectedFlat.lat} lng={selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
