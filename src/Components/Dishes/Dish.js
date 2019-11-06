import React from "react";
import { DishesList } from "./DishesList";
import { useParams } from "react-router-dom";

export function Dish(props) {
  let { dishId } = useParams();
  return <h3>Requested dish ID: {DishesList[dishId - 1].text}</h3>;
}
