import React, { Component } from "react";

import flats from "../../data/flats";
import FlatList from "./flat_list";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats
    };
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={this.state.flats} />
        </div>
        <div className="map-container">
        </div>
      </div>
    );
  }
}

export default App;
