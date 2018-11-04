import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase, { config, login, logout } from './firebase-config';
import Profile from './Profile';

const database = firebase.database();

var snapshot = {};

function displayContent(user) {
  const firstName = user.displayName.split(' ')[0];
  document.getElementById("name").innerHTML = firstName;
  const username = user.displayName;
  const imgurl = user.photoURL;
  const email = user.email;
  const databaseRef = database.ref().child('users');
  let newuser = true;
  databaseRef.on('value', snap => {
    console.log(snap.val())
    snapshot = snap.val();
    // console.log(snapshot["-LQR_IOOxaBpLEhMdw6o"].email);
    // console.log(Object.keys(snapshot));
    Object.keys(snapshot).forEach(key => {
      // console.log(snapshot[key].email);
      if (snapshot[key].email == email) {
        newuser = false;
      }
    });
  });
  if (newuser) {
    databaseRef.push({
      username: username,
      imgurl: imgurl,
      email: email
    });
  }
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
        <p id="lol">

        </p>
        {/* <Profile username={username} imgurl={imgurl}/> */}
      </div>
    );
  }
}

export default App;
