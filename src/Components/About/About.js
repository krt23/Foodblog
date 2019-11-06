import React from "react";
import about from "../../images/blog-about.jpg";
import "./style.scss";

export default function About() {
  return (
    <div>
      <div className="about">
        <img src={about} alt="citrus" />
        <h1 className="aboutHeader">About</h1>
      </div>
      <div className="aboutText">
        <p>Тут має бути текст</p>
      </div>
    </div>
  );
}
