import React, { useState } from "react";
import {
  Route,
  Redirect,
  useLocation,
  useHistory,
  Link
} from "react-router-dom";
import Field from "./Field";
import { client } from "./client";
import "./style.scss";
import Cookies from "universal-cookie";

// const Auth = {
//   authorize: false,
//   authenticate(cb) {
//     Auth.authorize = true;
//   },
//   signout(cb) {
//     Auth.authorize = false;
//   }
// };

export function SignOutButton() {
  let history = useHistory();

  return cookies.get("login") ? (
    <Link
      to="/login"
      onClick={() => {
          cookies.remove("login")
          history.push("/");
      }}
    >
      Sign out
    </Link>
  ) : (
    <Link to="/login">Login</Link>
  );
};

export function PrivateRoute({ children, props }) {
  return (
    <Route
      {...props}
      render={({ location }) =>
        cookies.get("login") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}


const cookies = new Cookies();


function Form() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let location = useLocation();
  let history = useHistory();

  let { from } = location.state || { from: { pathname: "/about/" } };

  const handleSubmit = event => {
    event.preventDefault();

    client
      .post("/login/", {
        email: email,
        password: password
      })
      .then(response => {
        console.log(response);
      })
      .then(() => {
        console.log(cookies.set("login"));
      })
      // .then(() => {
      //   Auth.authenticate(true);
      // })
      .catch(error => {
        console.log("An error occurred:", error);
      });

      cookies.get("login") && history.replace(from) //: history.push("/login");
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="text-center loginForm">
        <h3>Sign In</h3>
        <Field
          value={email}
          placeholder="Login"
          type="email"
          onChange={e => setEmail(e.target.value)}
        />
        <Field
          value={password}
          placeholder="Password"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-dark">
          Login
        </button>
      </form>
    </div>
  );
}

export default Form;
