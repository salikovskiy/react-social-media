import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBym5uA4Fe5BTYS9itJODJJNAoweU10iQE",
  authDomain: "hike-app-b2db2.firebaseapp.com",
  databaseURL: "https://hike-app-b2db2.firebaseio.com",
  projectId: "hike-app-b2db2",
  storageBucket: "hike-app-b2db2.appspot.com",
  messagingSenderId: "720036764333",
  appId: "1:720036764333:web:98149434a824ec8c2c0424",
  measurementId: "G-BX6CQB9WPQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
