import authReducer from "./authReducer";
import hikeReducer from "./hikeReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  hike: hikeReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
