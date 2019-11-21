import React from "react";
//import Book from "../../assets/Images/Book.png";


const DishComponentItem = ({id, title, ingredients, preParagraph1, preParagraph2 }) => (
    <div className="content">
              <div className="text-center text-muted">
                <h1 key={id}> {title}</h1>
                <br />
                <pre>
                  <h3 key={id}>Ingredients:</h3>
                  {ingredients}
                </pre>
                <div>
                  <h3 key={id}>Preparation:</h3>
                  <p>{preParagraph1}</p>
                  <p>{preParagraph2}</p>

                </div>
              </div>
            </div>
    );

export default DishComponentItem;