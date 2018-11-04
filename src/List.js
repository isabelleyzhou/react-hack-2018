import React from 'react';
import Friend from './Friend.js';
import firebase, { login, logout } from './firebase-config';

class List extends React.Component {

    render() { 
        return (
            <div>
                {/* <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." /> */}
                        {this.props.items.map(item => (
                            <Friend name={item.name}
                                    img={item.img}
                                    className="delete"
                                    clicker={() => this.props.clicker(item)}
                                    />
                        ))}
                </div>
        )
    }
}

export default List;
