import { UPDATE_POST, FETCH_POSTS } from "./postTypes";
import axios from "axios";

export const fetchPosts = () => {
  //
  // Thunk middleware (dispatch) interrupts before completing
  return (dispatch) => {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: FETCH_POSTS,
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updatePost = (post) => {
  return {
    type: UPDATE_POST,
    payload: post,
  };
};
