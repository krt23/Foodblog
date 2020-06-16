import React from "react";
import { withRouter } from "react-router-dom";
import { client } from "../../api/client";
import loading from "../../images/loading.gif";
import RecipeComponentItem from "./RecipeComponentItem";

class Recipe extends React.Component {
  state = {
    isLoading: true,
    data: [],
    error: false
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    setTimeout(() => {
      client
      .get(`/receipts/${id}`)
      .then(data => this.setState({ isLoading: false, data: data.data }))
      .catch(error => this.setState({ isLoading: false, error: true }));
    }, 1000);
    
    
  }

  render() {
    const { isLoading, data } = this.state;
    console.log(data);

    return (
      <React.Fragment>
        {isLoading && (
          <div className="container text-center loader">
            <img src={loading} alt="loading" />{" "}
          </div>
        )}
        {!isLoading && (
          <div className="container mt-2">
            <RecipeComponentItem
              id={data.id}
              img={data.img}
              title={data.title}
              ingredients={data.text.ingredients}
              preparation1={data.text.preparation.paragraph1}
              preparation2={data.text.preparation.paragraph2}
              preparation3={data.text.preparation.paragraph3}
              preparation4={data.text.preparation.paragraph4}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(Recipe);
