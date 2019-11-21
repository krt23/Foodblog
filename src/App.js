import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import OurTeam from "./Components/OurTeam/OurTeam";
import ContactUs from "./Components/ContactUs/ContactUs";
import Dishes from "./Components/Dishes/Dishes";
import { Dish } from "./Components/Dishes/Dish";
import Recipe from "./Components/Recipes/Recipe";
import Recipes from "./Components/Recipes/Recipes";
import User from "./Components/Users/User";
import Users from "./Components/Users/Users";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import { PrivateRoute } from "./Components/Login/Login";


class App extends React.Component {

  render() {
    return (
        <Router>
  
          <div className="app">
          <Header />

            <Switch>
              <Route path="/FoodBlog/">
                <Home />
              </Route>
              <Route path="/login" component={Login}/>
              <PrivateRoute path="/about">
                <About />
              </PrivateRoute>
              <Route path="/dishes/:id">
                <Dish />
              </Route>
              <Route path="/dishes">
                <Dishes />
              </Route>
              <Route path="/recipes/:id">
                <Recipe />
              </Route> 
              <Route path="/recipes">
                <Recipes />
              </Route>
              <PrivateRoute path="/contacts">
                <ContactUs />
              </PrivateRoute>
              <PrivateRoute path="/team">
                <OurTeam />
              </PrivateRoute>
              <Route path="/users/:id">
                <User />
              </Route>
              <Route path="/users">
                <Users />
              </Route>



            </Switch>
          </div>

          <Footer />
        </Router>
    );
  }
}

export default App;
