import React from "react";
import {UsersArray} from "./UsersArray";
import {UserListItem} from "./UserListItem";


class UsersList extends React.Component {
  render() {
    return UsersArray.map(user => (
      <UserListItem
      firstName={user.first_name}
      lastName={user.last_name}
      email={user.email}
      photo={user.photo} />
    ))
  }
}

export default UserList;
