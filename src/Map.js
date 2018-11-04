import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import GetLocation from './Geolocate.js';

 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {

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
        console.log(lt);
        console.log(ln);
        self.setState ({
          loaded: true,
          latitude: 48.8566,
          longitude: 2.3522,
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
  }

    renderMarkers(map, maps) {
      let marker = new maps.Marker({
        position: this.state.center,
        map,
        label: 'you',
        title: 'Hello World!'
      });

      var infowindow =  new maps.InfoWindow({content: 'helloooo'});
      console.log();
      let count = 0;
      for (let key in this.state.other_friends) {
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
        
      </div>
    );
  }
}
 
export default SimpleMap;
