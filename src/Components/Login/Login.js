import React from "react";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";
import Field from "./Field";
import "./style.scss";
import Auth from "./Auth";  

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: ""
    };
  }

  onLoginChangeHandler = event => {
    this.setState({
      login: event.target.value
    });
  };

  onPasswordChangeHandler = event => {
    this.setState({
      password: event.target.value
    });
  };

  cookies = new Cookies();

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.login === "admin" && this.state.password === "admin") {
      this.cookies.set("login", "logined");
      this.props.loginHandler();
      this.props.history.push("/home");
    }
  };

  render() {    
    const { login, password } = this.state;
    return (
      <div className="container">
        <div className="text-center text-muted">
          <div className="loginHeader">
            <h1>LOGIN</h1>
          </div>
          <form action="#" className="loginForm" onSubmit={this.handleSubmit}>
            <Field
              value={login}
              name="username"
              placeholder="Username"
              type="text"
              onChange={this.onLoginChangeHandler}
            />
            <Field
              value={password}
              name="password"
              placeholder="Password"
              type="password"
              onChange={this.onPasswordChangeHandler}
            />

            <button class="btn btn-lg btn-primary btn-block" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
