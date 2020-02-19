import React, { Component } from "react";
import { connect } from "react-redux";
import { createHike } from "../../store/actions/hikeActions";
import { Redirect } from "react-router-dom";

class CreateHike extends Component {
  state = {
    title: "",
    details: "",
    difficulty: "Easy",
    img: "",
    people: null,
    contacts: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createHike(this.state);
    this.props.history.push("/dashboard");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container pt-4">
        <form onSubmit={this.handleSubmit} className="white">
          <h3 className="font-weight-bold text-center text-secondary">
            Create new hike
          </h3>
          <div className="form-group">
            <label htmlFor="title">Title *</label>
            <input
              required
              type="text"
              className="form-control"
              id="title"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="img">
              Image link <small className="text-muted">(not required)</small>
            </label>
            <input
              type="text"
              className="form-control"
              id="img"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="details">
              Details *{" "}
              <small className="text-muted">
                (how many days the hike will take and what the route will be)
              </small>
            </label>
            <textarea
              id="details"
              className="form-control"
              onChange={this.handleChange}
              rows="6"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="difficulty">Difficulty *</label>
            <select
              required
              value={this.state.difficulty}
              onChange={this.handleChange}
              className="form-control"
              id="difficulty"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
              <option value="Impossible">Impossible</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="people">How many people *</label>
            <input
              required
              type="number"
              className="form-control"
              id="people"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contacts">
              Contact info{" "}
              <small className="text-muted">
                (leave your number or any social media account){" "}
              </small>
              *
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="contacts"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success">
              Create
            </button>
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
