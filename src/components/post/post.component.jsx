import React from "react";

import "./post.styles.scss";

export const Post = (props) => {
  return (
    <div className="post">
      <h3>Title:</h3>
      <h4>{props.post.title}</h4>
      <h4>Body:</h4>
      <p>{props.post.body}</p>
    </div>
  );
};
