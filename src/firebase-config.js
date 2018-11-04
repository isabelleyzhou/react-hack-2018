import firebase from 'firebase';

export const config = {
    apiKey: "AIzaSyD5RjSHkTzUhDfg5rvDngEGf8LGDF0hviY",
    authDomain: "wheretwomeet.firebaseapp.com",
    databaseURL: "https://wheretwomeet.firebaseio.com",
    projectId: "wheretwomeet",
    storageBucket: "wheretwomeet.appspot.com",
    messagingSenderId: "37099806359"
};

firebase.initializeApp(config);
export default firebase;

export function login(userFunction) {
    function newLoginHappened(user) {
      if (user) {
        userFunction(user);
      } else {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
      }
    }
    firebase.auth().onAuthStateChanged(newLoginHappened);
}

export function logout() {
  firebase.auth().signOut();
}