import React, { Component, useState } from "react";
import { Route, Redirect, useLocation, useHistory } from "react-router-dom";
//import { withAuth } from "./withAuth";
import Field from "./Field";
//import Validation from "./Validation";
import { client } from "./client";
//import Cookies from "universal-cookie";

const Auth = {
  authorize: false,
  authenticate(cb) {
    Auth.authorize = true;
    setTimeout(cb, 100);
  }
};

export function PrivateRoute({ children, props }) {
  return (
    <Route
      {...props}
      render={({ location }) =>
        Auth.authorize ? (
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

function Form() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let location = useLocation();
  let history = useHistory();

  let { from } = location.state || { from: { pathname: "/" } };

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
        Auth.authenticate(true);
      })

      // // .then(response => {
      //   // Handle success.
      //   console.log("Well done!");
      //   console.log("User token", response.data.token);
      // })
      .catch(error => {
        console.log("An error occurred:", error);
      });

    Auth.authenticate
      ? // return <Redirect to="/about" />
        history.replace(from)
      : history.push("/home");
  };

  return (
    <form onSubmit={handleSubmit}>
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
      {/* <button onClick={this.handleClick}>Click</button> */}
      <button type="submit">Login</button>

      <div>
        {/* <Validation
            email={email}
            password={password}
            expectedLogin="eve.holt@reqres.in"
            expectedPassword="cityslicka"
          /> */}
      </div>
    </form>
  );
}

export default Form;
