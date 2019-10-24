import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { DishesList } from "./DishesList";
import Home from "./Home";
import About from "./About";
import Dish from "./Dish";
import Dishes from "./Dishes";
import ContactUs from "./ContactUs";
import AboutAuthor from "./AboutAuthor";
import HeaderBlog from "./Header/HeaderBlog";

export default function FoodRoute() {
  return (
    <Router>
      <div>
        <HeaderBlog />

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dishes/:dishId">
            <Dish />
          </Route>
          <Route path="/dishes">
            <Dishes />
          </Route>
          <Route path="/contacts">
            <ContactUs />
          </Route>
          <Route path="/author">
            <AboutAuthor />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
