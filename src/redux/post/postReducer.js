import { UPDATE_POST } from "./postTypes";

const initialState = {
  posts: [],
  searchField: "",
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POST:
      return {
        ...state,
        post: newPost,
        payload: ?
      };
    default:
      return state;
  }
};

export default postReducer;
