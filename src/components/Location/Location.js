import React, { Component } from 'react';
// import photo1 from './mcdonalds.jpg';
import './Location.css';

class Location extends Component {
  static propTypes = {
    image: 'https://www.wien.info/media/images/41993-das-loft-sofitel-so-vienna-19to1.jpeg',
    // starRating: 0,
    locationName: 'Name',
    milesAway: 23
  };

  render() {
    return (
      <div className="Location-div">
        <div className="">
          {/* <img src={this.props.image} alt="location"/> */}
          <div className='locationName'>{this.props.locationName}</div>
          <div className='milesAway'>Average {this.props.milesAway} miles away</div>
        </div>
      </div>
    );
  }
}

export default Location;
