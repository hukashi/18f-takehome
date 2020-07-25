import React from "react";

import { Post } from "../post/post.component";
import "./posts.styles.scss";

export const Posts = (props) => {
  console.log(props);
  return (
    <div className="posts">
      {props.posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
