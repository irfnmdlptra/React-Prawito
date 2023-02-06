import React, { Component, Fragment } from "react";
import Post from "../../component/Post/Post";
import "./BlogPost.css";
import axios, { Axios } from "axios";

class BlogPost extends Component {
  state = {
    post: [],
  };
  getPostAPI = () => {
    axios.get('http://localhost:3004/posts')
    .then((result) => {
      this.setState ({
        post: result.data
      })
    })
  }
  handleRemove = (data) => {
    console.log(data);
    axios.delete(`http://localhost:3004/${data}`).then((res) => {
      console.log(res)
    })
  }
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //       .then((response) => response.json())
    //       .then((json) => {
    //         this.setState({
    //           post: json,
    //         });
    //       });
    axios.get('http://localhost:3004/posts')
    .then((result) => {
      this.setState({
        post:result.data
      })
    })
  }

  render() {
    return (
      <Fragment>
        <p className="section-title">Blog Post</p>
        <div className="container">
          {this.state.post.map((post) => {
            return <Post key={post.id} data={post} remove={this.handleRemove}/>;
          })}
        </div>
      </Fragment>
    );
  }
}

export default BlogPost;
