import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import OurTeam from "./Components/OurTeam/OurTeam";
import ContactUs from "./Components/ContactUs/ContactUs";
import Recipe from "./Components/Recipes/Recipe";
import Recipes from "./Components/Recipes/Recipes";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import {PrivateRoute} from "./Components/Login/Login";


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="app">
                <Header/>
                    <div className="main-content">
                    <Switch>
                        <Redirect exact from="/" to="/FoodBlog/" component={Home}/>
                        <Route path="/FoodBlog/">
                            <Home/>
                        </Route>
                        <Route path="/login" component={Login}/>
                        <PrivateRoute path="/about">
                            <About/>
                        </PrivateRoute>

                        <Route path="/recipes/:id">
                            <Recipe/>
                        </Route>
                        <PrivateRoute path="/recipes">
                            <Recipes/>
                        </PrivateRoute>

                        <PrivateRoute path="/contacts">
                            <ContactUs/>
                        </PrivateRoute>
                        <PrivateRoute path="/team">
                            <OurTeam/>
                        </PrivateRoute>
                    </Switch>
                    </div>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
