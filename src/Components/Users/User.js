import React from "react";
import { Link, withRouter } from "react-router-dom";
import { client } from "../../api/client";
import UserComponentItem from "./UserComponentItem";

class User extends React.Component {
  state = {
    loading: true,
    data: [],
    error: false
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    client
      .get(`/Users/${id}`)
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
            <UserComponentItem
              username={data.UserName}
              password={data.Password}
              id={data.ID}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(User);
