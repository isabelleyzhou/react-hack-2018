import React, { Component } from 'react';
import './LocationProfile.css';
import photo from '../Location/mcdonalds.jpg'

class LocationProfile extends Component {


  render() {
    return (
      <div className="LocationList-div">
        <div className="header">
        {/* <NavLink to="/" className="ReturnArrow">
          &#8592;
        </NavLink> */}
        Meet at...
        </div>
        <div className="overview">
            <div className="pic-darken">
              <img className="pic" src={photo} alt=""></img>
            </div>
            <div className="overview-text">
              <div className="LocationName">Parth's Kitchen</div>
              <div className="MilesAway">Average of 23 miles away</div>
            </div>
        </div>
        <button className="button" type='submit'>Select</button>
        <div className="Open">Open</div>
        <div className='bigcontainer'>
          <div className='leftheaders'>
            <div className='heading'>Rating</div>
            <div className='heading'>Phone Number</div>
            <div className='heading'>Price</div>
          </div>
          <div className='rightside'>
            <div className="PhoneNumber">4.5 stars</div>
            <div className="PhoneNumber">(626)-626-6262</div>
            <div className="PhoneNumber">$$$</div>
          </div>
        </div>
        {/* <div className="details">
              <div className='heading'>Rating</div>
              <div className="PhoneNumber">4.5 stars</div>
              <div className='heading'>Phone Number</div>
              <div className="PhoneNumber">(626)-626-6262</div>
              <div className='heading'>Price</div>
              <div className="PhoneNumber">$$$</div>
        </div> */}
      </div>
    );
  }
}

export default LocationProfile;
