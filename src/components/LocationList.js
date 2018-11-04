import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import Location from './Location/Location';
import './LocationList.css';

class LocationList extends Component {
//    let locations = [

//    ];
//    for (let i = 0; i < locations.length; i += 1) {
//     locations.push(
//       <Location unitName={unitNames[i].name} path="/lessons" buttonType="link" />
//     );
//   }
  render() {
    return (
      <div className="LocationList-div">
        <div className="header">
        {/* <NavLink to="/" className="ReturnArrow">
          &#8592;
        </NavLink> */}
        Meet at...
        </div>
        <Location starRating={4} locationName="McDonald's" milesAway={13}/>
        <Location starRating={4} locationName="Parth's House" milesAway={13}/>
        <Location starRating={4} locationName="Parth's House" milesAway={13}/>
        <Location starRating={4} locationName="Parth's House" milesAway={13}/>
      </div>
    );
  }
}

export default LocationList;
