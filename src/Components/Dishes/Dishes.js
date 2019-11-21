import React from "react";
import { DishesList } from "./DishesList";
import { Link, useRouteMatch } from "react-router-dom";
import dishes from "../../images/blog-dishes.jpg";
import "./style.scss";
import DishesComponentItem from "./DishesComponentItem";

export default function Dishes() {
  let match = useRouteMatch();

  return (
    <div>
      <div className="dishes">
        <img src={dishes} alt="dishes" />
        <h1 className="dishesHeader">Dishes</h1>
      </div>
      <ul>
        {DishesList.map(item => (
          <DishesComponentItem
            name={item.name}
            id={item.id}
          />
        ))}
      </ul>
    </div>
  );
}
