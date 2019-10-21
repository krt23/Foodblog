import React, { Component } from "react";
import Field from "./Field";
import {USERS} from './UsersList';

const User = ({ name }) => <div>{name}</div>;

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: ""
    };
  }

  onPasswordChangeHandler = event => {
    this.setState({
      password: event.target.value
    });
  };

  onEmailChangeHandler = event => {
    this.setState({
      email: event.target.value
    });
  };

  render() {
    const { email, password } = this.state;
    return (
        USERS.map(user => (
          <User name={user.name} />
        ))
    );
  }
}

export default Users;

