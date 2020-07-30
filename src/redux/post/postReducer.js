import { UPDATE_POST, FETCH_POSTS } from "./postTypes";

const initialState = [];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case UPDATE_POST:
      const { id, title, body } = action.payload;
      return state.map((post) => {
        if (id === post.id) {
          return { ...post, title, body };
        }
        return post;
      });
    default:
      return state;
  }
};

export default postReducer;
