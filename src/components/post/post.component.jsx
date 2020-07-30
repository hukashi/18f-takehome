import React from "react";
import { connect } from "react-redux";

import { updatePost } from "../../redux/post/postActions";
import { bindActionCreators } from "redux";

import "./post.styles.scss";

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isInEditMode: false,
      newPost: {
        title: "",
        body: "",
        userId: null,
        id: null,
      },
    };
  }

  updatePostHandler = (e) => {
    e.preventDefault();
    const { newPost } = this.state;
    const { post } = this.props;
    newPost.id = post.id;
    newPost.userId = post.userId;
    this.props.updatePost(this.state.newPost);
    this.setState({ isInEditMode: false });
  };

  handlePostChange = (e) => {
    const { newPost } = this.state;
    if (e.target.name === "title") {
      newPost.title = e.target.value;
    } else if (e.target.name === "body") {
      newPost.body = e.target.value;
    }
    this.setState({ newPost });
  };

  enterEditMode = () => {
    const { newPost } = this.state;
    const { post } = this.props;
    newPost.title = post.title;
    newPost.body = post.body;
    this.setState({ newPost, isInEditMode: true });
  };

  render() {
    return this.state.isInEditMode ? (
      this._renderForm()
    ) : (
      <div className="post">
        <div>
          <h3 className="title-heading">Title:</h3>
          <p className="title">{this.props.post.title}</p>
        </div>
        <div>
          <h3 className="body-heading">Body:</h3>
          <p className="body">{this.props.post.body}</p>
        </div>
        <button onClick={this.enterEditMode}>EDIT</button>
      </div>
    );
  }
  _renderForm() {
    return (
      <form className="edit-form" onSubmit={this.updatePostHandler}>
        <div className="title-edit">
          <label>
            Title:
            <input
              name="title"
              type="text"
              value={this.state.newPost.title}
              onChange={(e) => this.handlePostChange(e)}
            />
          </label>
        </div>
        <div className="body-edit">
          <label>
            Body:
            <textarea
              name="body"
              type="text"
              value={this.state.newPost.body}
              onChange={(e) => this.handlePostChange(e)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
        <button
          className="cancel-btn"
          onClick={() => this.setState({ isInEditMode: false })}
        >
          Cancel
        </button>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    searchField: state.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePost: bindActionCreators(updatePost, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
