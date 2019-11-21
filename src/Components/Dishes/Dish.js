import React from "react";
import { DishesList } from "./DishesList";
import { useParams } from "react-router-dom";
import DishComponentItem from "./DishComponentItem"

export function Dish(props) {
  let { id } = useParams();
  //const { loading, data } = this.state;

  return (
  <div>
    {DishesList.map(item => (
      <DishComponentItem
        title={item.title}
        ingredients={item.text.ingredients}
        preParagraph1={item.text.preparation.paragraph1}
        preParagraph2={item.text.preparation.paragraph2}
        id={item.id}
      />
    ))}
    <h3>Requested dish ID: {DishesList[id - 1].title}</h3>
  </div>
  
  
  );
}
