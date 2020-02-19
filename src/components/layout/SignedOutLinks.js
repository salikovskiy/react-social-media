import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink to="/signup" className="nav-link">
          Signup
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/signin" className="nav-link">
          Log in
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
