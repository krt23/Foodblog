import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useRouteMatch,
  useParams,
  withRouter
} from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import OurTeam from "./Components/OurTeam/OurTeam";
import ContactUs from "./Components/ContactUs/ContactUs";
import Dishes from "./Components/Dishes/Dishes";
import { Dish } from "./Components/Dishes/Dish";
import Api from "./api/Api";
import User from "./Components/Users/User";
import Users from "./Components/Users/Users";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import LoginPage from "./Components/Login/LoginPage";
import { PrivateRoute } from "./Components/Login/Login";





class App extends React.Component {
  render() {
    return (
        <Router>
  
          <div>
            <Header />

            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/login" component={Login}></Route>
              <PrivateRoute path="/about">
                <About />
              </PrivateRoute>
              <PrivateRoute path="/dishes/:id">
                <Dish />
              </PrivateRoute>
              <PrivateRoute path="/dishes">
                <Dishes />
              </PrivateRoute>
              <PrivateRoute path="/contacts">
                <ContactUs />
              </PrivateRoute>
              <Route path="/team">
                <OurTeam />
              </Route>
              <Route path="/users/:id">
                <User />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
                <Redirect to="/home" />



            </Switch>
          </div>

          <Footer />
        </Router>
      
    );
  }
}

export default App;
