import React from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import "./style.scss";

const cookies = new Cookies();

export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
    <div className="">
      <ul className="navbar-nav mr-auto navList">
        <span className="nav-link navItem">
          <Link to="/home">Home</Link>
        </span>
        <span className="nav-link navItem">
          <Link to="/about">About</Link>
        </span>
        <span className="nav-link navItem">
          <Link to="/dishes">Dishes</Link>
        </span>
        <span className="nav-link navItem">
          <Link to="/contacts">Contact Us</Link>
        </span>
        <span className="nav-link navItem">
          <Link to="/team">Our Team</Link>
        </span>
        <span className="nav-link navItem">
          <Link to="/users">Users</Link>
        </span>
      </ul>
    </div>
    </nav>
  );
}
