import React, { Component } from "react";
import { connect } from "react-redux";
import { createHike } from "../../store/actions/hikeActions";
import { Redirect } from "react-router-dom";

class CreateHike extends Component {
  state = {
    title: "",
    details: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createHike(this.state);
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create new hike</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="details">Details</label>
            <textarea
              id="details"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispathToProps = dispatch => {
  return {
    createHike: hike => dispatch(createHike(hike))
  };
};

export default connect(mapStateToProps, mapDispathToProps)(CreateHike);
