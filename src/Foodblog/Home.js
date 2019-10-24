import React from "react";
import blog from "../images/blog-image.jpg";
import "./Home.scss";

export default function Home() {
  return (
    <div className="Home">
      <img src={blog} alt="blog"  />
      <h1 className="HomeHeader">Home</h1>
    </div>
  );
}
