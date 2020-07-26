import React from "react";

import axios from "axios";

import { Posts } from "./components/posts/posts.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchField: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updatePost = (index, post) => {
    let { posts } = this.state;
    posts[index] = post;
    this.setState({ posts });
  };

  render() {
    const { posts, searchField } = this.state;
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="Search Posts by Title"
          handleChange={(e) => {
            this.setState({ searchField: e.target.value });
          }}
        />
        <h1 className="title">POSTS</h1>
        <Posts posts={filteredPosts} onPostUpdate={this.updatePost} />
      </div>
    );
  }
}

export default App;
