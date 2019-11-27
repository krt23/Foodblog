import React from "react";
import about from "../../images/blog-about.jpg";
import { MOCK_DATA } from "../../api/MOCK_DATA";
import "./style.scss";

export default function About() {
  return (
    <div>
      <div className="about">
        <img src={about} alt="citrus" />
        <h1 className="aboutHeader">About</h1>
      </div>
      <br />
      <div className="container text-center text-muted">
        <p className="aboutText">{MOCK_DATA.ABOUT.aboutBlog}</p>
        <p className="aboutText">{MOCK_DATA.ABOUT.aboutTheShop}</p>
      </div>
    </div>
  );
}
