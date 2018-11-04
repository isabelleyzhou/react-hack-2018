import React, { Component } from 'react';
import './Location.css';

class Location extends Component {
  render() {
    const {image} = this.props;
    const {locationName} = this.props;
    const {milesAway} = this.props;
    return (
      <div className="Location-container">
        <div className="pic-darken">
          <img className="pic" src={image} alt=""></img>
        </div>
        <div className="overview-text">
          <div className="LocationName">{locationName}</div>
          <div className="MilesAway">Average {milesAway} miles away</div>
        </div>
      </div>
    );
  }
}

export default Location;
