import React from "react";
import "./style.scss";


const RecipeComponentItem = ({id, name, title}) => (
  <div className="content">
    <div className="text-center text-muted">
      <h1 key={id}> {name}</h1>
      <br />
      <p>
        <h3 key={id}>Password: {title}</h3>
      </p>
    </div>
  </div>
);

export default RecipeComponentItem;