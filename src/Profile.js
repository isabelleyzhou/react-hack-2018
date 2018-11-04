import React from 'react';

export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.imgurl} alt={this.props.username}></img>
            </div>
        );
    }
}