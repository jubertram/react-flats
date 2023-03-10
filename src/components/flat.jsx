import React, { Component } from "react";

class Flat extends Component {
  handleSelected = () => {
    const { selectFunction, index } = this.props;
    selectFunction(index);
  }

  render() {
    const { selected, flat } = this.props;
    return (
      <div className={`card${ selected ? ' active' : ''}`}
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.flat.imageUrl})`
      }}>
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{flat.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleSelected}/>
      </div>
    );
  }
}

export default Flat;
