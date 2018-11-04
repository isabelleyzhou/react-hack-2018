import React, { Component } from 'react';
import Modal from 'react-modal';
import './Location.css';

class Location extends Component {
    constructor() {
      super();
      this.state = {
        unitList: []
      };
      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
      this.setState({modalIsOpen: true});
    }
    closeModal() {
      this.setState({modalIsOpen: false});
    }
    afterOpenModal() {
      this.setState({modalIsOpen: true});
    }
    
  render() {
    const {image} = this.props;
    const {locationName} = this.props;
    const {milesAway} = this.props;
    const {number} = this.props;
    const {phone} = this.props;
    const {rating} = this.props;
    const {price} = this.props;
    const {modalIsOpen} = this.state;
    
    
    return (
      <div className="Location-container">
        <button type="submit" onClick={this.openModal} className="pic-darken">
          <img className="pic" src={image} alt=""></img>
        </button>
        <Modal className="modal" isOpen={modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal}
        contentLabel="yuhh">
        <div className="overview">
            <div className="pic-darken">
              <img className="pic" src={image} alt=""></img>
            </div>
            <div className="Modaloverview-text">
              <div className="ModalLocationName">{locationName}</div>
              <div className="ModalMilesAway">Average of {milesAway} miles away</div>
            </div>
        </div>
        <button className="button" type='submit'>Select</button>
        <div className="Open">Open</div>
        <div className='bigcontainer'>
          <div className='leftheaders'>
            <div className='heading'>Rating:</div>
            <div className='heading'>Phone Number:</div>
            <div className='heading'>Price:</div>
          </div>
          <div className='rightside'>
            <div className="PhoneNumber">{rating} stars</div>
            <div className="PhoneNumber">{phone}</div>
            <div className="PhoneNumber">{price}</div>
          </div>
        </div>
        
        </Modal>
        <div className="overview-text">
          <div className="number">{number}</div>
          <div className="LocationName">{locationName}</div>
          <div className="MilesAway">Average {milesAway} miles away</div>
        </div>
      </div>
    );
  }
}

export default Location;
