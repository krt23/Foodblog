import React from "react";
import {
    useHistory,
    Link
  } from "react-router-dom";
import Auth from "./Login";
import Cookies from "universal-cookie";

cookies = new Cookies();

export default function SignOutButton() {
    let history = useHistory();
  
    return Auth.authorize ? (
      <p>Welcome!{" "}</p>
      <Link
        to="/login"
        onClick={() => {
          Auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </Link>
    ) : (
      <Link to="/login">Login</Link>
    );
  }