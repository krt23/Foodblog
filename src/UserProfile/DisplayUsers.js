import React from 'react';
import {UsersArray} from './UsersArray';
import {UserListItem, FirstName} from "./UserListItem";
import {UserProfile} from "./UserProfile";


class DisplayUsers extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      option: 'all'
    };
  }

  changeFieldOption = event => this.setState({ option: event.target.value });


  render() {
    const { option } = this.state;

    return (
      <div>
        <select value={option} onChange={this.changeFieldOption}>
          <option value="all">Show All</option>
          <option value="firstName">First name</option>
          <option value="lastName">Last name</option>
          <option value="email">Email</option>
          <option value="photo">Photo</option>
        </select>
        <UserProfile UserList={UsersArray} viewFieldName={option} />
      </div>
    );
  }
}

export default DisplayUsers;

