import React from "react";
import {Link} from "react-router-dom";
import "./style.scss";
import {SignOutButton} from "../Login/Login";

export default function Menu(props) {
    return (
        <React.Fragment>
            <ul className="navbar-nav nav">
                <li className="nav-item menuItem">
                    <Link to="/FoodBlog/" className="nav-link menuLink" onClick={props.click}>
                        Home
                    </Link>
                </li>
                <li className="nav-item menuItem">
                    <Link to="/about" className="nav-link menuLink" onClick={props.click}>
                        About
                    </Link>
                </li>
                <li className="nav-item menuItem">
                    <Link to="/recipes" className="nav-link menuLink" onClick={props.click}>
                        Recipes
                    </Link>
                </li>
                <li className="nav-item menuItem">
                    <Link to="/contacts" className="nav-link menuLink" onClick={props.click}>
                        Contact Us
                    </Link>
                </li>
                <li className="nav-item menuItem">
                    <Link to="/team" className="nav-link menuLink" onClick={props.click}>
                        Our Team
                    </Link>
                </li>
            </ul>
            <ul className="navbar-nav nav justify-content-end">
                <li className="nav-item menuItem">
                          <SignOutButton/>


                </li>
            </ul>
        </React.Fragment>
    );
}
