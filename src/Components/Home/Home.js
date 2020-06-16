import React from "react";
import home from "../../images/blog-home.jpg";
import "./style.scss";


const Home = () => (
    <div className="home">
        <img src={home} alt="home"/>
        <h1 className="homeHeader">Welcome to Food Blog</h1>
    </div>
);

export default Home;
