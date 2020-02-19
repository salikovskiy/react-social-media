import React from "react";
import moment from "moment";

const Notifications = ({ notifications }) => (
  <div className="section">
    <div className="card-content notification-card ">
      <span className="card-title h6 text-muted">Notifications</span>
      <ul className="notifications">
        {notifications &&
          notifications.map(item => (
            <li key={item.id} className="mb-2">
              <span className="text-info">{item.user} - </span>
              <span className="text-secondary">{item.content}</span>
              <div className="grey-text note-date">
                <small>{moment(item.time.toDate()).fromNow()}</small>
              </div>
            </li>
          ))}
      </ul>
    </div>
  </div>
);

export default Notifications;
