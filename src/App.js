import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Posts } from "./components/posts/posts.component";
import { SearchBox } from "./components/search-box/search-box.component";
import { fetchPosts } from "./redux/post/postActions";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: "",
    };
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { searchField } = this.state;
    const filteredPosts = this.props.posts.filter((post) =>
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
        <Posts posts={filteredPosts} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: bindActionCreators(fetchPosts, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
