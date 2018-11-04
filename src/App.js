import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase, { config, login, logout } from './firebase-config';

function displayContent(user) {
  const firstName = user.displayName.split(' ')[0];
  document.getElementById("name").innerHTML = firstName;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p id="name">
            {login(displayContent)}
          </p>
          <a
            onClick={logout}
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Log Out
          </a>
        </header>
      </div>
    );
  }
}

export default App;
