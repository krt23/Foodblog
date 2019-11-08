import React from "react";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";
import Home from "../Home/Home";

const cookies = new Cookies();

export default function Auth() {
  let history = useHistory();
  function isAuth() {
    if (cookies.get("login")) {
      history.push("/login");
    }
  }
  return isAuth(Home);
}
