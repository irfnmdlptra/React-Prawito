import React from "react";
import "./YouTubeComp.css";

const YouTubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img src={props.src} alt="" />
        <p className="time">{props.time}</p>
      </div>
      <h3 className="title">{props.title}</h3>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

YouTubeComp.defaultProps = {
  time: "00:00",
  title: "Coffe Drink",
  desc: "xx ditonton. 1 hari yang lalu",
  src: "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
};

export default YouTubeComp;
