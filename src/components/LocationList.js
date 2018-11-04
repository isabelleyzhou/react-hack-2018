import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import Location from './Location/Location';
import './LocationList.css';
import Map from '../Map.js';
import GoogleMapReact from 'google-map-react';
import SearchBox from '../SearchBox.js';



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
    let location = null;
    let lt = 0;
    let ln = 0;
    this.state = {
      names: [],
      ratings: [],
      images: [],
      closed: [],
      phones: [],
      distances: [],
      locations: [],
      loaded: false
    };
    if (window.navigator && window.navigator.geolocation) {
      location = window.navigator.geolocation;
    }
    if (location){
      let self = this
      location.getCurrentPosition((position) => {
        lt = position.coords.latitude;
        ln = position.coords.longitude;
        self.setState ({
          latitude: lt,
          longitude: ln,
          center: {
            lat: lt,
            lng: ln
          },
          other_friends: {
            martinez: [37.8663193, -122.2508],
            soda: [37.8756, -122.2588]
          },
          zoom: 11
        });
      }
      )}

    this.findMiddleRestaurants= this.findMiddleRestaurants.bind(this); 
  }

  findMiddleRestaurants() {
    let count = 1;
    let x = this.state.latitude;
    let y = this.state.longitude;
    for (let key in this.state.other_friends) {
      let val = this.state.other_friends[key];
      x += val[0];
      y += val[1];
      count += 1;
    }
    x = x / count;
    y = y / count;
    if (!isNaN(x) && !isNaN(y)) {
      let locations = this.state.locations;
      console.log(locations);
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
      let numbers;
      let distances;
      let ratings;
      let phones;
      let prices;
      let coordinatesList;
      for (let i = 0; i < payload["businesses"].length; i += 1) {
        names = payload["businesses"][i]["name"];
        images = payload["businesses"][i]["image_url"];
        numbers = i+1;
        ratings = payload["businesses"][i]["rating"];
        phones = payload["businesses"][i]["phone"];
        prices = payload["businesses"][i]["price"];
        distances = (payload["businesses"][i]["distance"]/225).toFixed(2);
        coordinatesList = payload["businesses"][i]["coordinates"];
        this.setState({
          loaded: true, locations: this.state.locations.concat(<Location image={images} locationName={names} number={numbers} milesAway={distances} phone={phones} rating={ratings} price={prices} coordinates={coordinatesList}/>)
        })
      }
    }).on('error', (payload)=>{
      console.warn('error');
    });
  }

  renderMarkers(map, maps) {
    let marker = new maps.Marker({
      position: this.state.center,
      map,
      title: 'Hello World!',
      icon: {                             
        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"                           }
    });

    var infowindow =  new maps.InfoWindow({content: 'Hey friend!'});
    let count = 0;
    for (let key in this.state.other_friends) {
      let val = this.state.other_friends[key];
      marker = new maps.Marker({
        position: new maps.LatLng(val[0], val[1]),
        map: map,
        // label: key,
        title: val,
        icon: {                             
          url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"                           }
      });
      maps.event.addListener(marker, 'click', (function (marker, count) {
        return function () {
          infowindow.open(map, marker);
      }
      })(marker, count));
      count += 1;
    }


    count = 0;
    for (let key in this.state.locations) {
      let val = this.state.locations[key];
      let pair = val.props.coordinates;
      let name = (val.props.locationName);
      let item =  new maps.InfoWindow({content: name});
      marker = new maps.Marker({
        position: new maps.LatLng(pair.latitude, pair.longitude),
        map: map,
        label: val.props.number.toString(),
        title: val
      });
      maps.event.addListener(marker, 'click', (function (marker, count) {
        return function () {
          item.open(map, marker);
      }
      })(marker, count));
      count += 1;
    }
}




  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <SearchBox/>
        {this.findMiddleRestaurants()}
        {
          this.state.loaded ?
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAsKbRzIYNhjUhLqWmH-mbynyNFIFkhd3Y' }}
            center={this.state.center}
            zoom={this.state.zoom}
            onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
          >
          </GoogleMapReact>:
          null
        }
        
        <div className="LocationList-div">
          <div className="header">
          Meet at...
          </div>
          {this.state.locations}
        </div>
      </div>
    );
  }
}

export default LocationList;
