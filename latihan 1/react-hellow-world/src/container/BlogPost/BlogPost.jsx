import React, { Component, Fragment } from "react";
import Post from "../../component/Post/Post";
import "./BlogPost.css";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
    showForm: false,
    isUpdate: false,
  };

  getPostAPI = () => {
    axios.get("http://localhost:3004/posts?_sort=id&_order=desc").then((result) => {
      this.setState({
        post: result.data,
      });
    });
  };

  postDataToAPI = () => {
    axios.post("http://localhost:3004/posts", this.state.formBlogPost).then(
      (res) => {
        console.log(res);
        this.getPostAPI();
      },
      (err) => {
        console.log("error: ", err);
      }
    );
  };

  putDataToAPI = () => {
    axios
      .put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
      .then(
        (res) => {
          console.log(res);
          this.getPostAPI();
        },
        (err) => {
          console.log("error: ", err);
        }
      );
  };

  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getPostAPI();
    });
  };

  handleUpdate = (data) => {
    console.log(data);
    this.setState({
      formBlogPost: data,
      showForm: true,
      isUpdate: true,
    });
  };

  handleFormChange = (event) => {
    let formBlogPostNew = { ...this.state.formBlogPost };
    let timestamp = new Date().getTime();
    formBlogPostNew["id"] = timestamp;
    formBlogPostNew[event.target.name] = event.target.value;
    this.setState({
      formBlogPost: formBlogPostNew,
    });
  };

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
    }
    this.setState({
      isUpdate: false,
      formBlogPost: {
        id: 1,
        title: "",
        body: "",
        userId: 1,
      },
    });
  };

  componentDidMount() {
    this.getPostAPI();
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };
  render() {
    return (
      <Fragment>
        <button type="submit section-title" className="btn-tambah" onClick={this.toggleForm}>
          Buat Blog
        </button>
          <div className="form-add-post">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" placeholder="tambah title" value={this.state.formBlogPost.title} onChange={this.handleFormChange} />
            <label htmlFor="body">Blog Content</label>
            <textarea name="body" id="body" cols="30" rows="10" value={this.state.formBlogPost.body} placeholder="add blog content" onChange={this.handleFormChange}></textarea>
            <button type="submit" className="btn-submit" onClick={this.handleSubmit}>
              Simpan
            </button>
          </div>
        <div className="container">
          {this.state.post.map((post) => {
            return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} />;
          })}
        </div>
      </Fragment>
    );
  }
}

export default BlogPost;
