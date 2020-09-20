import * as firebase from "firebase";
require("firebase/firestore");

var config = {
  apiKey: "AIzaSyDFnJE_YzuvUkn5H0IUxOpfiVwxzeX8UeI",
  authDomain: "vuejs-wolf-of-wallstreet.firebaseapp.com",
  databaseURL: "https://vuejs-wolf-of-wallstreet.firebaseio.com",
  projectId: "vuejs-wolf-of-wallstreet",
  storageBucket: "vuejs-wolf-of-wallstreet.appspot.com",
  messagingSenderId: "117401905831",
  appId: "1:117401905831:web:2b8309ab6aa61151190982",
  measurementId: "G-F7LZ935LF5",
};

firebase.initializeApp(config);

export const db = firebase.firestore();

export const writeData = (data) => {
  db.collection("user")
    .doc("data")
    .set(data)
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
};

export const readData = () => {
  var docRef = db.collection("user").doc("data");

  docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc.data();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
};
