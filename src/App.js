import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase, { config, login, logout } from './firebase-config';
import Profile from './Profile';
import List from './List';

const database = firebase.database();

var snapshot = {};

function displayContent(user) {
  const firstName = user.displayName.split(' ')[0];
  document.getElementById("name").innerHTML = '<strong>' + firstName + '</strong>';
  const username = user.displayName;
  const imgurl = user.photoURL;
  const email = user.email;
  const databaseRef = database.ref().child('users');
  let newuser = true;
  databaseRef.once('value').then(snap => {
    console.log(snap.val())
    snapshot = snap.val();
    console.log(newuser);
    Object.keys(snapshot).forEach(key => {
      console.log(snapshot[key].email);
      if (snapshot[key].email == email) {
        newuser = false;
      }
    });
    console.log(newuser);
    if (newuser) {
      databaseRef.push({
        username: username,
        imgurl: imgurl,
        email: email
      });
    }
  });
}

class App extends Component {
  componentDidMount() {
    login(displayContent)
  }
  render() {
    return (
      <div>
        <Profile />
        <List />
      </div>
    );
  }
}

export default App;
