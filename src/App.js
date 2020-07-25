import React from "react";
import "./App.css";

import { Posts } from "./components/posts/posts.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => this.setState({ posts: posts }));
  }

  render() {
    const { posts, searchField } = this.state;
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="Search Posts"
          handleChange={(e) => {
            this.setState({ searchField: e.target.value });
          }}
        />
        <h1 className="title">POSTS</h1>
        <Posts posts={filteredPosts} />
      </div>
    );
  }
}

export default App;
