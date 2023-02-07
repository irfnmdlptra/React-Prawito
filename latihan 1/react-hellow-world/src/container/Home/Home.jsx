import React, { Component } from "react";
import BlogPost from "../BlogPost/BlogPost";
// import YouTubeComp from "../../component/YouTubeComp/YouTubeComp";
// import Product from "../Product/Product";
// import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import "./Home.css";

class Home extends Component {
  state = {
    showComponent: true,
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //    showComponent:false
    //   });
    // }, 15000);
  }
  render() {
    return (
      <div>
        {/* <p>YouTube Component</p>
        <hr />
        <YouTubeComp 
            time="4.32"
            title="Nonton"
            desc="2k ditonton. 1 hari yang lalu"
            src="https://images.unsplash.com/photo-1675005921870-ccded2e54ce8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
        <YouTubeComp 
            time="2.16"
            title="Progres"
            desc="3m ditonton. 5 hari yang lalu"
            src="https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
        <YouTubeComp 
            time="1.43"
            title="Nguda"
            desc="2m ditonton. 8 hari yang lalu"
            src="https://images.unsplash.com/photo-1675059701332-8c8a2e0766a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNjd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
        <YouTubeComp 
            time="6.26"
            title="Kota"
            desc="2m ditonton. 10 hari yang lalu"
            src="https://images.unsplash.com/photo-1675141194800-ae6f2f729ed9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
        <YouTubeComp 
            /> */}
        {/* <p>Counter</p><hr />
            <Product/> */}
        {/* <p className="home">LiveCycle Component</p><hr />
            {
              this.state.showComponent 
              ?
              <LifeCycleComp/>
              : nullZ
            } */}
        <div className="nav">
          <p className="marquee">Blog Post <img src="https://imgs.search.brave.com/fFjDS1zntO1BwTTes0B_C2lY43m1bJSHKt3gQE7q7lI/rs:fit:480:320:1/g:ce/aHR0cHM6Ly9iZXN0/YW5pbWF0aW9ucy5j/b20vQW5pbWFscy9N/YW1tYWxzL0NhdHMv/Y2F0cy9jdXRlLWtp/dHR5LWFuaW1hdGVk/LWdpZi02NC5naWY.gif" alt=""  /></p> <hr />
        </div>
        <BlogPost />
      </div>
    );
  }
}
export default Home;
