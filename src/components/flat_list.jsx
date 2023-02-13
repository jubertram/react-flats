import React, { Component } from "react";

import Flat from "./flat";

class FlatList extends Component {
  render () {
    return this.props.flats.map((flat, index) => {
      return (
        <Flat
          selectFunction={this.props.select}
          flat={flat}
          selected={flat.name === this.props.selectedFlat.name}
          key={index}
          index={index}
        />
      );
    });
  }
}

export default FlatList;
