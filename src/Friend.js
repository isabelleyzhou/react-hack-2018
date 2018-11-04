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
            <button onClick={() => this.props.clicker()}>{this.props.name}</button>
        )
    }
}

export default Friend;
