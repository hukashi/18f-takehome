import React from "react";

import "./post.styles.scss";

export class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isInEditMode: false,
      newPost: {
        title: "",
        body: "",
      },
    };
  }

  updatePostHandler = (e) => {
    e.preventDefault();
    this.props.onPostUpdate(this.props.index, this.state.newPost);
    this.setState({ isInEditMode: false });
  };

  handlePostChange = (e) => {
    console.log(e.target);
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
    console.log("this is the Post component props");
    console.log(this.props);
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
            Title:a
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
        <button onClick={() => this.setState({ isInEditMode: false })}>
          Cancel
        </button>
      </form>
    );
  }
}
