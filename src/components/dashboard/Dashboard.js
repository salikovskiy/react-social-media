import React, { Component } from "react";
import Notifications from "./Notifications";
import HikeList from "../hikes/HikeList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  state = {};
  render() {
    const { hikes, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="hike container">
        <div className="row">
          <div className="col s12 m6">
            <HikeList hikes={hikes} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hikes: state.firestore.ordered.hikes,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "hikes" }])
)(Dashboard);
