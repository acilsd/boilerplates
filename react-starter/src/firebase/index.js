/*eslint no-console: off*/
import database from 'firebase/database';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBHX5D5f0_-sBlWS7iOHc6anmOCD-KREG4",
  authDomain: "supertodo-9770f.firebaseapp.com",
  databaseURL: "https://supertodo-9770f.firebaseio.com",
  storageBucket: "supertodo-9770f.appspot.com",
  messagingSenderId: "362268761852"
};

firebase.initializeApp(config);

export const ghProvider = new firebase.auth.GithubAuthProvider();

export const fbRef = database().ref();

export const signin = firebase.auth();

export const signOut = firebase.auth().signOut();

export default firebase;
