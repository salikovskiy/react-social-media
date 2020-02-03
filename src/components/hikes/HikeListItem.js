import React from "react";
import moment from "moment";

const HikeListItem = ({ hike }) => (
  <div className="card z-depth-0 hike-summary">
    <div className="card-content grey-text text-darken-3">
      <span className="card-title">{hike.title}</span>
      <p>
        Posted by {hike.authorFirstName} {hike.authorLastName}
      </p>
      <p className="grey-text">{moment(hike.createdAt.toDate()).calendar()}</p>
    </div>
  </div>
);

export default HikeListItem;
