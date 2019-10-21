import React from 'react';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	login: '',
      	password: ''
    };
  }

  handleChangeLogin = event => {
    this.setState({
      login: event.target.value
    })
  }

  handleChangePassword = event => {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    const{login, password} = this.state; //this.state.login && this.state.password - деструктуризація
    const loginForm = (
      <form action="#">
      <label>Username:
      	<input 
      	  value={login}
          type="text" 
          name="log"
          placeholder="Enter login.." 
          onChange={this.handleChangeLogin}/>
      </label>
      <br/>
      <label>Password:
      	<input 
      	  value={password}
          type="password"
          name="pass"
          placeholder="Enter password.."
          onChange={this.handleChangePassword}/>
      </label>
      </form>
    );

    return (
      <div id="authorization">
        { loginForm }
        <h1>{ login === "user" && password === "password" ? 'Success' : 'Enter the Password' }
        </h1>
      </div>
    );
  }
}

export default Form;