import * as firebase from "firebase";
// import auth from "firebase/auth";

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);
