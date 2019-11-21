import React from "react";
//import user from "../../assets/Images/Book.png";
import { Link } from "react-router-dom";
import "./style.scss";

const DishesComponentItem = ({ id, name }) => (
  <div class="collectionItemOuter">
    <div class="collectionItem" key={id}>
      <img src="https://www.mieten-in-adlershof.de/wp-content/uploads/2017/08/placeholder-profile.jpg" alt="Users" />
      <div className="collectionText">
        <h4 key={id}>{name}</h4>
        <Link to={`/dishes/${id}`}>
          <span className="btn btn-secondary">More</span>
        </Link>
      </div>
    </div>
  </div>
);

export default DishesComponentItem;
