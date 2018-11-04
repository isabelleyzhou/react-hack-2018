import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './datePage.css';
import Picker from 'react-mobile-picker-scroll';


class DatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueGroups: {
                hour: 6,
                minute: 30,
                ampm: 'AM'
            },
            optionGroups: {
                hour: [1,2,3,4,5,6,7,8,9,10,11,12],
                minute: ['00','01','02','03','04','05','06','07','08','09',10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59],
                ampm: ['AM','PM']
            }
        };
    }


    handleChange = (name,value) => {
        this.setState(({valueGroups}) => ({
            valueGroups: {
                ...valueGroups,
                [name]: value
            }
        }));
    };


  render() {
    const {optionGroups, valueGroups} = this.state;
    return (
    <div>
      <div className="topBar">
        <div className="topText"> Meet at...</div>
      </div>
      <div className="container">
        <Calendar className="calendar"></Calendar>
        <Picker className="scroller"  
                optionGroups={optionGroups}
                valueGroups={valueGroups}
                onChange={this.handleChange} />
      </div>
      <button className="next">Next</button>
     
    </div>
 
    );
  }
}

export default DatePage;
