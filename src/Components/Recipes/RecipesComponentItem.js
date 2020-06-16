import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const RecipesComponentItem = ({ id, name, img }) => (
  <div className="col-md-4 my-5">
    <div className="collectionItem">
      <img key={id} src={img} alt="Dishes" />
      <div className="collectionText">
        <h4 key={id}>{name}</h4>
        <br />
        <Link to={`/recipes/${id}`}>
          <span className="btn btn-dark">More..</span>
        </Link>
      </div>
    </div>
  </div>
);

export default RecipesComponentItem;
