import React from "react";
import { Nav, NavLink } from "reactstrap";

export default function HeaderBlog() {
  return (
    <div>
      <div>
        <Nav className="Nav">
          <NavLink className="NavItem" href="home">
            Home
          </NavLink>
          <NavLink className="NavItem" href="about">
            About
          </NavLink>
          <NavLink className="NavItem" href="dishes">
            Dishes
          </NavLink>
          <NavLink className="NavItem" href="contacts">
            Contact us
          </NavLink>
          <NavLink className="NavItem" href="author">
            About author
          </NavLink>
        </Nav>
      </div>
    </div>
  );
}
