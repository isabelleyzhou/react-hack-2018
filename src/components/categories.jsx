import React, { Component } from 'react';
import Category from './Category/Category';
import './categories.css';


class Categories extends Component {  
  render() {
    return (
    <div>
     <div className="topBar">
        <div className="topText"> Meet at...</div>
      </div>
      <div className="map" />
      <div className="background">
      {/* <div className="container">
        <div className="category1"></div>
            <text>Social</text>
      </div>
      <div className="container">
        <div className="category2"></div>
            <div>Study</div>
      </div>
        <div className="container">
             <div className="category3"></div> 
             <div>Business</div>
        </div> */}
        <div className="container">
         <Category className="category" color="#ffffff" name="Social"/>
        <Category className="category" name="Business"/>
        <Category className="category" name="Study"/>
        </div>
        
    </div>
      

    </div>

    );
  }
}

export default Categories;
