import React, { Component } from 'react';
import photo1 from './mcdonalds.jpg';
import './Location.css';

const RapidAPI = require('rapidapi-connect');
const rapid = new RapidAPI("default-application_5bde08cde4b09efa5fbce273", "a3092fd1-0bb6-447e-bc02-287407fe8392");

rapid.call('YelpAPI', 'getBusinesses', {
    'accessToken': 'f8NSZ7Sz4Ik5GGmMJ5MesAO15azeGlsGM-yT6wlU-scRpc1Q3whzwjal0T34QC_oXvXjwRoXu0sX4OIboGcjBm4JrHiWr8RKQA7YYUe-3n7E6eDWESxzKei3EgjeW3Yx'

}).on('success', (payload)=>{
     /*YOUR CODE GOES HERE*/
}).on('error', (payload)=>{
     /*YOUR CODE GOES HERE*/
});

class Location extends Component {
  
  render() {
    return (
      <div className="Location-container">
        <img src={this.props.image} alt="location"/>
        <div className="overlay">
          <div className='locationName'>{this.props.locationName}</div>
          <div className='milesAway'>Average {this.props.milesAway} miles away</div>
        </div>
      </div>
    );
  }
}

export default Location;
