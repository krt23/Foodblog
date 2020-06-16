import React from "react";
import first from "../../images/one.svg";
import second from "../../images/two.svg";
import third from "../../images/three.svg";
import fourth from "../../images/four.svg";
import "./style.scss";

const RecipeComponentItem = ({
                                 id,
                                 img,
                                 title,
                                 ingredients,
                                 preparation1,
                                 preparation2,
                                 preparation3,
                                 preparation4
                             }) => (
    <div className="content">
        <div className="text-center text-danger">
            <h1 key={id}> {title}</h1>
            <br/>
        </div>
        <div>
            <div className="row">
                <div className="col-5">
                    <img className="img-thumbnail" src={img} alt="Dishes" key={id}/>
                </div>
                <div className="col-7 mr-auto text-center">
                    <h3 className="text-info">
                        Ingredients
                    </h3>
                    <p className="ingredients text-muted">{ingredients}</p>
                </div>
            </div>
            <div className="text-muted">
                <h3 className="text-info pb-2">Preparation:</h3>
                <p><img className="stepImg" src={first} alt="first"/> {preparation1}</p>
                <p><img className="stepImg" src={second} alt="second"/> {preparation2}</p>
                <p><img className="stepImg" src={third} alt="third"/> {preparation3}</p>
                <p><img className="stepImg" src={fourth} alt="fourth"/> {preparation4}</p>
            </div>
        </div>
    </div>
);

export default RecipeComponentItem;
