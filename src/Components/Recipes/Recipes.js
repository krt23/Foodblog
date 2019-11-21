import React from "react";
import { clientBiz } from "../../api/clientBiz";
import { Link } from "react-router-dom";
import RecipesComponentItem from "./RecipesComponentItem";
import "./style.scss";

class Recipes extends React.Component {
  state = {
    loading: true,
    data: [],
    error: false
  };

  componentDidMount() {
    clientBiz
      .get("/receipts")
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
            <h2 className="collectionTitle">
              Recipes
            </h2>
            <div className="collection">
              {data.map(item => (
                <RecipesComponentItem
                  name={item.name}
                  img={item.img}
                  id={item.id}
                />
              ))}
              </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Recipes;
