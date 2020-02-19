import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import hLogo from "../../assets/h-logo.png";

class Homepage extends Component {
  state = {};
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <main className="main">
        <div className="container pt-5">
          <img
            src={hLogo}
            alt="logo"
            className="col col-4 mx-auto d-flex mt-5 mb-5 animated infinite pulse main-heading"
          />
          <h1 className="text-center text-secondary">
            Social media for hiking enthusiasts
          </h1>
          <p className="text-center text-muted">
            ( Post your hikes and join others )
          </p>
          <Link to="/dashboard">
            <button className="d-flex mx-auto btn btn-success">
              Get started
            </button>
          </Link>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Homepage);
