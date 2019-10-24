import React from "react";
import citrus from "../images/citrus.jpg";
import "./About.scss";

export default function About() {
  return (
    <div>
    <div className="About">
      <img src={citrus} alt="citrus"  />
      <h1 className="AboutHeader">About</h1>
    </div>
    <div className="AboutText">
    <p>Тут має бути текст</p>
  </div>
  </div>

  );
}
