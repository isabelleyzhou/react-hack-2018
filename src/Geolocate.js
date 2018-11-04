import React, { Component } from 'react';

export class GetLocation extends Component{
    constructor(){
        super();
        this.state = {
            latitude: '',
            longitude: ''
        };
        this.getMyLocation = this.getMyLocation.bind(this);
        this.checkSubmit = this.checkSubmit.bind(this);
    }
    
    ComponentDidMount(){
        this.getMyLocation();
    }

    getMyLocation(e) {
    let location = null;
    let latitude = null;
    let longitude = null;
    if (window.navigator && window.navigator.geolocation) {
        location = window.navigator.geolocation
    }
    if (location){
        location.getCurrentPosition((position) => {
            latitude = position.coords.latitude;
            longitude= position.coords.longitude;
            this.setState({latitude: latitude, longitude: longitude});

        })
    }
        console.log(this.state.latitude);
        console.log(this.state.longitude);
    }

    checkSubmit(e) {
        if (e && e.charCode === 13) {
          this.getMyLocation();
        }
      }
    
    render(){
        return(
        <div>
            <p>Search </p>
            <input
                onKeyPress={this.checkSubmit}
                className="inputText"
                placeholder="Search for friends"
              />
        </div>
    
        );
    }
    }

export default GetLocation;
