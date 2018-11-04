import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import SearchBox from './SearchBox.js';

 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {

  constructor(){
    super();
    let location = null;
    let lt = 0;
    let ln = 0;
    this.state = {
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
          loaded: true,
          latitude: lt,
          longitude: ln,
          center: {
            lat: lt,
            lng: ln
          },
          other_friends: {
            centera: [37.8710, -122.2508],
            centerb: [37.8756, -122.2588]
          },
          zoom: 11
        });
      })
    }

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
      }
    }

    renderMarkers(map, maps) {
      let marker = new maps.Marker({
        position: this.state.center,
        map,
        label: 'you',
        title: 'Hello World!'
      });

      var infowindow =  new maps.InfoWindow({content: 'helloooo'});
      let count = 0;
      for (let key in this.state.other_friends) {
        let val = this.state.other_friends[key];
        marker = new maps.Marker({
          position: new maps.LatLng(val[0], val[1]),
          map: map,
          title: val
        });
        maps.event.addListener(marker, 'click', (function (marker, count) {
          return function () {
            infowindow.open(map, marker);
        }
        })(marker, count));
        count += 1;
      }

      for (let key in this.state.restaurants) {
        let val = this.state.other_friends[key];
        console.log(val);
        marker = new maps.Marker({
          position: new maps.LatLng(val[0], val[1]),
          map: map,
          title: val
        });
        maps.event.addListener(marker, 'click', (function (marker, count) {
          return function () {
            infowindow.open(map, marker);
        }
        })(marker, count));
        count += 1;
      }
      
  }
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <SearchBox/>
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
        {this.findMiddleRestaurants()}
        
      </div>
    );
  }
}

export default Map;