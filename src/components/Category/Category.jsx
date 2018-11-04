import React, { Component } from 'react';
import './Category.css';


class Category extends Component {  


  render() {
    const {name} = this.props;
    return (

      <div className="container">
        <div className="circle-image"></div>
        <div className="name">{name}</div>
      </div>


    );
  }
}

export default Category;
