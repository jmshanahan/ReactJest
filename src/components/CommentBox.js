import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
class CommentBox extends Component {
  state = { comment: "" };
  handleChange = event => {
    this.setState({ comment: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    // Call an action creator
    this.props.saveComment(this.state.comment);
    // And save the comment
    this.setState({ comment: "" });
  };
  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch comments
        </button>
      </Fragment>
    );
  }
}

export default connect(
  null,
  actions
)(CommentBox);
