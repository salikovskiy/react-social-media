import React from "react";
import HikeListItem from "./HikeListItem";
import { Link } from "react-router-dom";

const HikeList = ({ hikes }) => {
  return (
    <div className="">
      {hikes &&
        hikes.map(hike => {
          return (
            <Link to={`/hike/${hike.id}`} key={hike.id}>
              <HikeListItem hike={hike} />
            </Link>
          );
        })}
    </div>
  );
};

export default HikeList;
