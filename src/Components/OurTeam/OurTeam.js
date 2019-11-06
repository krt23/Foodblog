import React from "react";
import team from "../../images/blog-team.jpg";
import "./style.scss";

export default function OurTeam() {
  return (
    <div className="team">
      <img src={team} alt="team" />
      <h1 className="teamHeader">Our Team</h1>
    </div>
  );
}

