import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

var config = {
  apiKey: "AIzaSyCx3MG9ntrAsrPKF83K3VN-CP8lekAJ26g",
  authDomain: "ninja-smoothies-da521.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-da521.firebaseio.com",
  projectId: "ninja-smoothies-da521",
  storageBucket: "ninja-smoothies-da521.appspot.com",
  messagingSenderId: "392327938442"
};
const firebaseApp = firebase.initializeApp(config);

firebaseApp.firestore().settings({timestampsInSnapshots: true})

export default firebaseApp.firestore()