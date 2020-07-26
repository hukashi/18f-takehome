import React from "react";

import { Post } from "../post/post.component";
import "./posts.styles.scss";

export const Posts = (props) => {
  console.log("this is the Posts props!");
  console.log(props);
  return (
    <div className="posts">
      {props.posts.map((post, index) => (
        <Post
          key={post.id}
          index={index}
          post={post}
          onPostUpdate={props.onPostUpdate}
        />
      ))}
    </div>
  );
};
