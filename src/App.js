import React from "react";
import "./App.css";

import { Posts } from "./components/posts/posts.component";

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
    return (
      <div className="App">
        <h1 className="title">POSTS</h1>
        <Posts posts={posts} />
      </div>
    );
  }
}

export default App;
