import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase, { config, login, logout } from './firebase-config';
import DatePage from './components/datePage';

function displayContent(user) {
  const firstName = user.displayName.split(' ')[0];
  document.getElementById("name").innerHTML = firstName;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <DatePage></DatePage>
      </div>
    );
  }
}

export default App;
