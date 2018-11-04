import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import GoogleMapsReact from 'google-maps-react';
 
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
      console.log('hello');
      location = window.navigator.geolocation;
    }
    if (location){
      console.log('hi')
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
          zoom: 11
        });
      })
    }
    console.log('here')
    

    // this.checkSubmit = this.checkSubmit.bind(this);
  }

  //   componentDidMount(){
  //     let location = null;
  //     let latitude = null;
  //     let longitude = null;
  //     if (window.navigator && window.navigator.geolocation) {
  //         location = window.navigator.geolocation
  //     }
  //     if (location){
  //         location.getCurrentPosition((position) => {
  //             latitude = position.coords.latitude;
  //             longitude= position.coords.longitude;
  //             this.setState({latitude: latitude, longitude: longitude, center: {latitude, longitude}});
  //         })
  //     }
  // }

    // checkSubmit(e) {
    //   if (e && e.charCode === 13) {
    //     this.getMyLocation();
    //   }
    // }
    renderMarkers(map, maps) {
      let marker = new maps.Marker({
        position: this.state.center,
        map,
        title: 'Hello World!'
      });
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
