import React, { Component } from "react";
import flats from "../../data/flats";

import Flat from "./flat";

class FlatList extends Component {
  render () {
    return this.props.flats.map((flat) => {
      return <Flat name={flat.name} url={flat.imageUrl} price={flat.price} priceCurrency={flat.priceCurrency} lat={flat.lat} lng={flat.lng} key={flats.indexOf(flat)} />;
    });
  }
}

export default FlatList;
