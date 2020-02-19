import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
// import dashboard from "../../assets/dashboard.png";
// import add from "../../assets/add.png";
// import profile from "../../assets/user.png";
// import logout from "../../assets/logout.png";
// import home from "../../assets/home.png";
// import logo from "../../assets/hikee.png";

const SignedInLinks = props => {
  return (
    <>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mx-3">
          <NavLink to="/dashboard" className="nav-link">
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink to="/create" className="nav-link">
            New Hike
          </NavLink>
        </li>
        <li className="nav-item mx-3">
          <button onClick={props.signOut} className="btn btn-secondary">
            LogOut
          </button>
        </li>
      </ul>
    </>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
