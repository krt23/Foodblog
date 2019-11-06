import React from "react";
import { client } from "../../api/client";



class Users extends React.Component {
  state = {
    loading: true,
    data: [],
    error: false
  };


  componentDidMount() {
    client
      .get("/Users/{id}")
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
            User Name: {data.UserName}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Users;
