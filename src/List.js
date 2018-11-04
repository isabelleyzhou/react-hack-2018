import React from 'react';
import firebase, { login, logout } from './firebase-config';
import User from './User';

const databaseRef = firebase.database().ref().child('users');

let userimgs = [];

export default class List extends React.Component {
    constructor() {
        super();
        this.state = {
            loaded : false
        }
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <div id="list">
            {login(listUsers)}
                {/* <User img="{userimgs[0]}" /> */}
            </div>
        );
    }
}

function listUsers(user) {
    databaseRef.once('value').then(snap => {
        let html = '';
        let snapshot = snap.val();
        Object.keys(snapshot).forEach(key => {
            const img = snapshot[key].imgurl;
            const name = snapshot[key].username.split(' ')[0];
            userimgs.push(img);
            html += '<div class="User"><img src=' + img + ' alt="oops" class="dp"/><p><strong>' + name + '</strong></p></div>';
        });
        console.log(userimgs);
        document.getElementById("list").innerHTML = html;
    });
}