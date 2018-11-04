import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import Location from './Location/Location';
import './LocationList.css';

// const locations = [];

// function createList(names, images, distances) {
//   for (let i = 0; i < names.length; i += 1) {
//       locations.push(<Location image={images[i]} locationName={names[i]} milesAway={distances[i]}/>);
//   }
//   return locations;
// }

class LocationList extends Component {
  constructor() {
    super();
    this.state = {
      names: [],
      ratings: [],
      images: [],
      closed: [],
      distances: [],
      locations: []
    }
  }

  async componentDidMount() {
    const RapidAPI = await require('rapidapi-connect');
    const rapid = await new RapidAPI("default-application_5bde08cde4b09efa5fbce273", "a3092fd1-0bb6-447e-bc02-287407fe8392");

    rapid.call('YelpAPI', 'getBusinesses', {
      accessToken: 'f8NSZ7Sz4Ik5GGmMJ5MesAO15azeGlsGM-yT6wlU-scRpc1Q3whzwjal0T34QC_oXvXjwRoXu0sX4OIboGcjBm4JrHiWr8RKQA7YYUe-3n7E6eDWESxzKei3EgjeW3Yx',
      coordinate: '37.87097, -122.2559',
      limit: '3',
      sortBy: 'distance'

    }).on('success', (payload)=>{
      let names;
      let images;
      let distances;
      for (let i = 0; i < payload["businesses"].length; i += 1) {
        names = payload["businesses"][i]["name"];
        images = payload["businesses"][i]["image_url"];
        distances = (payload["businesses"][i]["distance"]/225).toFixed(2);
        this.setState({
          // names: this.state.names.concat(payload["businesses"][i]["name"]),
          // ratings: this.state.ratings.concat(payload["businesses"][i]["rating"]),
          // images: this.state.images.concat(payload["businesses"][i]["image_url"]),
          // closed: this.state.closed.concat(payload["businesses"][i]["is_closed"]),
          // distances: this.state.distances.concat(payload["businesses"][i]["distance"]),
          locations: this.state.locations.concat(<Location image={images} locationName={names} milesAway={distances}/>)
        })

      }
    }).on('error', (payload)=>{
      console.warn('error');
    });

  }

  render() {
    return (
      <div className="LocationList-div">
        <div className="header">
        {/* <NavLink to="/" className="ReturnArrow">
          &#8592;
        </NavLink> */}
        Meet at...
        </div>
        {this.state.locations}
        {/* {createList(this.state.names, this.state.images, this.state.distances)} */}
        {console.log(this.state.locations)}
      </div>
    );
  }
}

export default LocationList;
