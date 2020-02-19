import React from "react";
import moment from "moment";
import noImage from "../../assets/SVG/no-image.svg";

const HikeListItem = ({ hike }) => (
  <div className="card mb-4">
    {hike.difficulty === "Easy" && (
      <button className="btn btn-success difficulty-card">
        {hike.difficulty}
      </button>
    )}
    {hike.difficulty === "Medium" && (
      <button className="btn btn-warning difficulty-card">
        {hike.difficulty}
      </button>
    )}
    {hike.difficulty === "Hard" && (
      <button className="btn btn-danger difficulty-card">
        {hike.difficulty}
      </button>
    )}
    {hike.difficulty === "Impossible" && (
      <button className="btn btn-dark difficulty-card">
        {hike.difficulty}
      </button>
    )}
    <button className="btn btn-primary people-card">
      <i className="material-icons mr-2">perm_identity</i>
      {hike.people}
    </button>

    <img
      className="card-img-top card-image"
      src={hike.img ? hike.img : noImage}
      alt="Hike img"
    ></img>
    <div className="card-body">
      <span className="card-title">{hike.title}</span>
      <hr className="my-2"></hr>
      <p className="author-text card-text text-secondary mb-1">
        Posted by {hike.authorFirstName} {hike.authorLastName}
      </p>
      <p className="text-muted date-text">
        {moment(hike.createdAt.toDate()).calendar()}
      </p>
    </div>
  </div>
);

export default HikeListItem;
