import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { SignOutButton } from "../Login/Login";
//import SignOutButton from "../Login/SignOutButton";



export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
    <div >
      <ul className="navbar-nav mr-auto navList">
        <span className="nav-link navItem">
          <Link to="/FoodBlog/">Home</Link>
        </span>
        <span className="nav-link navItem">
          <Link to="/about">About</Link>
        </span>
        <span className="nav-link navItem">
          <Link to="/dishes">Dishes</Link>
        </span>
        <span className="nav-link navItem">
          <Link to="/recipes">Recipes</Link>
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
        <span className="nav-link navItem navRight">
          <SignOutButton />
        </span> 
      </ul>
    </div>
    </nav>
  );
}
