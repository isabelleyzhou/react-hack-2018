import React from 'react';
import './App.css';
import firebase, { login, logout } from './firebase-config';

export default class Profile extends React.Component {
    componentDidMount() {
        login(getDP);
    }
    render() {
        return (
            <div className="Profile">
                <img src="" id="dp" alt="logo" />
                <p id="name"></p>
                <button onClick={logout}>
                    Log Out
                </button>
            </div>
        );
    }
}

function getDP(user) {
    document.getElementById("dp").src = user.photoURL;
}