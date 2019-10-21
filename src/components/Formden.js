import React, { Component } from "react";
import Field from "./Field";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: 'React',
      password: 'react',
      loginValid: false,
      passwordValid: false
    };
  }

  onLoginChangeHandler = event => {
    const login = event.target.value;
    const log = login == this.state.login;
    this.setState({
      loginValid: log
    });
  };

  onPasswordChangeHandler = event => {
    const password = event.target.value;
    const pass = password == this.state.password;
    this.setState({
      passwordValid: pass
    });
  };

  
  render() {
    const { login, password } = this.state;
    return (
      <div className="Form">
        <Field

          label="username : "
          type="text"
          onChange={this.onLoginChangeHandler}
        />
        <Field

          label="password : "
          type="password"
          onChange={this.onPasswordChangeHandler}
        />

         <div>
          {this.state.loginValid && this.state.passwordValid ? <span>Success</span>: ""}
        </div>
      </div>
    );
  }
}

export default Form;