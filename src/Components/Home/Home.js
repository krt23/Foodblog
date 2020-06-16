import React from "react";
import home from "../../images/blog-home.jpg";
import "./style.scss";


const Home = () => (
    <div className="home mb-2">
        <img src={home} alt="home"/>
        <h1 className="homeHeader img-fluid">Welcome to Food Blog</h1>
    </div>
);

export default Home;
