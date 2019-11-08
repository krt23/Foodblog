import React from "react";
import { client } from "./client";

export class Api extends React.Component {
  state = {
    loading: true,
    data: [],
    error: false
  };

  componentDidMount() {
    client
      .get("/Books")
      .then(data => this.setState({ loading: false, data: data.data }))
      .catch(error => this.setState({ loading: false, error: true }));
  }

  render() {
    const { loading, data } = this.state;
 
    return (
      <React.Fragment>
        {loading && <div> loading </div>}
        {!loading && data.length > 0 && (
          <div>
            {data.map(item => (
              <div>{item.ID}</div>
            ))}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Api;