import React, { Component } from "react";
import Field from "./components/Field";
import Validation from './components/Validation';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
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

  
  render() {
    const { login, password } = this.state;
    return (
      <div className="Form">
        <Field
          value={login}
          label="username : "
          type="text"
          onChange={this.onLoginChangeHandler}
        />
        <Field
          value={password}
          label="password : "
          type="password"
          onChange={this.onPasswordChangeHandler}
        />

         <div>
          <Validation
            login={login}
            password={password}
            expectedLogin=""
            expectedPassword=""/>
        </div>
      </div>
    );
  }
}

export default Form;