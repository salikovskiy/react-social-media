import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
import noImage from "../../assets/SVG/no-image.svg";

const HikeDetails = props => {
  const { hike, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;

  if (hike) {
    return (
      <div className="container section hikes-details pt-4">
        <div className="card z-depth-0">
          <img
            className="card-img-top card-image"
            src={hike.img ? hike.img : noImage}
            alt="Hike img"
          ></img>
          <div className="card-content p-4">
            <h2 className="card-title text-secondary">{hike.title}</h2>
            <div className="d-flex mb-3">
              {hike.difficulty === "Easy" && (
                <button className="btn btn-success mr-2">
                  {hike.difficulty}
                </button>
              )}
              {hike.difficulty === "Medium" && (
                <button className="btn btn-warning mr-2">
                  {hike.difficulty}
                </button>
              )}
              {hike.difficulty === "Hard" && (
                <button className="btn btn-danger mr-2">
                  {hike.difficulty}
                </button>
              )}
              {hike.difficulty === "Impossible" && (
                <button className="btn btn-dark mr-2">{hike.difficulty}</button>
              )}
              <button className="btn btn-primary people-card-modified">
                <i className="material-icons mr-2">perm_identity</i>
                {hike.people}
              </button>
            </div>
            <p>{hike.details}</p>
            <small className="text-muted">Contacts</small>
            <p>{hike.contacts && hike.contacts}</p>
            <hr className="my-2"></hr>
            <div className="text-muted">
              Posted by{" "}
              <span className="text-primary">
                {hike.authorFirstName} {hike.authorLastName}
              </span>
            </div>
            <small>{moment(hike.createdAt.toDate()).calendar()}</small>
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
