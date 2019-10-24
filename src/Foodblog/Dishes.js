import React from "react";
import { DishesList } from "./DishesList";
import { Link, useRouteMatch } from "react-router-dom";

export default function Dishes() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Dishes</h2>

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
