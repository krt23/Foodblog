import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.scss";
import { SignOutButton } from "../Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">   
        <ul className="navbar-nav nav">
          <li className="nav-item navItem menu">
            <Link to="/FoodBlog/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item navItem menu">
            <NavLink to="/about" className="nav-link" activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item navItem menu">
            <Link to="/recipes" className="nav-link">
              Recipes
            </Link>
          </li>
          <span className="nav-item navItem menu">
            <Link to="/contacts" className="nav-link">
              Contact Us
            </Link>
          </span>
          <li className="nav-item navItem menu">
            <Link to="/team" className="nav-link">
              Our Team
            </Link>
          </li>
          <li className="nav-item navItem">
            <span className="nav-link">
              <SignOutButton />
            </span>
          </li>
        </ul>
    </nav>
  );
}
