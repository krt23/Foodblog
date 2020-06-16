import React from "react";
import team from "../../images/blog-team.jpg";
import { MOCK_DATA } from "../../api/MOCK_DATA";
import "./style.scss";

export default function OurTeam() {
  return (
    <div className="mb-5">
      <div className="team">
        <img src={team} alt="team" />
        <h1 className="teamHeader">Our Team</h1>
      </div>
      <br />
      <div className="container text-muted">
        <h2>FOUNDERS</h2>
        <h4 className="text-danger">Amanda Hesser</h4>
        <h6 className="text-secondary">Co-Founder & CEO</h6>
        <p className="teamText">{MOCK_DATA.OUR_TEAM.author.authorAmanda}</p>
        <h5>Activity</h5>
        <p className="teamText">{MOCK_DATA.OUR_TEAM.activity.activityAmanda}</p>
        <h4 className="text-danger">Merrill Stubbs</h4>
        <h6 className="text-secondary">Co-Founder & President</h6>
        <p className="teamText">{MOCK_DATA.OUR_TEAM.author.authorMerrill}</p>
        <h5>Activity</h5>
        <p className="teamText">
          {MOCK_DATA.OUR_TEAM.activity.activityMerrill}
        </p>
      </div>
    </div>
  );
}
