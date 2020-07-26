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
        <button onClick={() => this.setState({ isInEditMode: true })}>
          EDIT
        </button>
      </div>
    );
  }

  _renderForm() {
    return (
      <div className="edit-form">
        <div className="title-edit">
          <label>
            Title: <input type="text" placeholder={this.props.post.title} />
          </label>
        </div>
        <div className="body-edit">
          <label>
            Body: <textarea type="text" placeholder={this.props.post.body} />
          </label>
        </div>
        <button onClick={this.props.onPostUpdate}>Save</button>
        <button onClick={() => this.setState({ isInEditMode: false })}>
          Cancel
        </button>
      </div>
    );
  }
}
