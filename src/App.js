import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { updatePost } from ".. /redux";

import { store } from "./redux/store";
import { Posts } from "./components/posts/posts.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

function App (props) {

  // componentDidMount() {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => {
  //       this.setState({ posts: response.data });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // updatePost = (index, post) => {
  //   let { posts } = this.state;
  //   posts[index] = post;
  //   this.setState({ posts });
  // };

  render() {
    // const { posts, searchField } = this.state;
    const filteredPosts = props.posts.filter((post) =>
      post.title.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <Provider store={store}>
        <div className="App">
          <SearchBox
            placeholder="Search Posts by Title"
            handleChange={(e) => {
              this.setState({ searchField: e.target.value });
            }}
          />
          <h1 className="title">POSTS</h1>
          <Posts posts={filteredPosts} onPostUpdate={props.updatePost} />
        </div>
      </Provider>
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
    updatePost: () => dispatch(updatePost()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
