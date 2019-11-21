import React from "react";
import { Link, withRouter } from "react-router-dom";
import { clientBiz } from "../../api/clientBiz";
import RecipeComponentItem from "./RecipeComponentItem";

class Recipe extends React.Component {
  state = {
    loading: true,
    data: [],
    error: false
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    clientBiz
      .get(`/receipts/${id}`)
      .then(data => this.setState({ loading: false, data: data.data }))
      .catch(error => this.setState({ loading: false, error: true }));
  }

  render() {
    const { loading, data } = this.state;
    console.log(data);

    return (
      <React.Fragment>
        {loading && <div> loading </div>}
        {!loading && (
          <div className="container">
            
            <RecipeComponentItem
              id={data.id}
              name={data.name}
              title={data.title}
              
            />
    
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(Recipe);
