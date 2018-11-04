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
                <img className="dp" src="http://files.softicons.com/download/social-media-icons/simple-icons-by-dan-leech/png/256x256/twitter.png" alt="lmao" />
                <p>{this.props.name}</p>
            </button>
        )
    }
}

export default Friend;
