import React from 'react';

export default class User extends React.Component {
    render() {
        return (
            <div>
                <img id="dp" src={this.props.img} alt="Not working :("></img>
            </div>
        );
    }
}