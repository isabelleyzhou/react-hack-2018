import React from 'react';

class Friend extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
    }
    render() {
        return (
            <button onClick={() => this.props.clicker()}>
                <img className="dp" src={this.props.img} alt="lmao" />
                <p>{this.props.name}</p>
            </button>
        )
    }
}

export default Friend;
