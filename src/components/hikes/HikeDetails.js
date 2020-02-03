import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const HikeDetails = props => {
  const { hike, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;

  if (hike) {
    return (
      <div className="container section hikes-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{hike.title}</span>
            <p>{hike.details}</p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div>
              Posted by {hike.authorFirstName}
              {hike.authorLastName}
            </div>
            <div>{moment(hike.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const hikes = state.firestore.data.hikes;
  const hike = hikes ? hikes[id] : null;
  return {
    hike: hike,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "hikes" }])
)(HikeDetails);
