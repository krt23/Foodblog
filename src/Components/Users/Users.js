import React from "react";
import { client } from "../../api/client";
import { Link } from "react-router-dom";



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
          <div>
            {data.map(item => (
              <li>
                <Link to={`users/${item.ID}`}>{item.UserName}</Link>
              </li>
            ))}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Users;
