import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const RecipesComponentItem = ({ id, name, img }) => (
  <div class="collectionItemOuter">
    <div class="collectionItem" key={id}>
      <img src={img} alt="Users" />
      <div className="collectionText">
        <h4 key={id}>{name}</h4>
        <Link to={`/recipes/${id}`}>
          <span className="btn btn-secondary">More</span>
        </Link>
      </div>
    </div>
  </div>
);

export default RecipesComponentItem;
