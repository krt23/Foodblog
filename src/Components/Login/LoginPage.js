import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Field from "./Field";
//import Validation from "./Validation";
import { client } from "./client";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onLoginChangeHandler = event => {
    this.setState({
      email: event.target.value
    });
  };

  onPasswordChangeHandler = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    // const user= {
    //   email: this.state.email,
    //   password: this.state.password
    // };

    client
      .post("/login/", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
      })
      // .then(response => { 
      //   if( response.data.token === "QpwL5tke4Pnpja7X4") {
      //   <Redirect to="/about" />
      //   } 
      // })
      // // .then(response => {
      //   // Handle success.
      //   console.log("Well done!");
      //   console.log("User token", response.data.token);
      // })
      .catch(error => {
        // Handle error.
        console.log("An error occurred:", error);
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Field
          value={email}
          placeholder="Login"
          type="email"
          onChange={this.onLoginChangeHandler}
        />
        <Field
          value={password}
          placeholder="Password"
          type="password"
          onChange={this.onPasswordChangeHandler}
        />
        {/* <button onClick={this.handleClick}>Click</button> */}
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Form;