import React from "react";
import { DishesList } from "./DishesList";
import { Link, useRouteMatch } from "react-router-dom";
import dishes from "../../images/blog-dishes.jpg";
import "./style.scss";

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
          <li>
            <Link to={`/dishes/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
