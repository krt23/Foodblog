import React from "react";
import { client } from "../../api/client";
import { Link } from "react-router-dom";
import UsersComponentItem from "./UsersComponentItem";
import "./style.scss";

class Users extends React.Component {
  state = {
    loading: true,
    data: [],
    error: false
  };

  componentDidMount() {
    client
      .get("/Users")
      .then(data => this.setState({ loading: false, data: data.data }))
      .catch(error => this.setState({ loading: false, error: true }));
  }

  render() {
    const { loading, data } = this.state;

    return (
      <React.Fragment>
        {loading && <div> loading </div>}
        {!loading && (
          <div className="container">
            <h2 className="collectionTitle">
              Users
            </h2>
            <div className="collection">
              {data.map(item => (
                <UsersComponentItem
                  username={item.UserName}
                  password={item.Password}
                  id={item.ID}
                />
              ))}
              </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Users;
