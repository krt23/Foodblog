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
import Auth from "./Components/Login/Auth";
import Cookies from "universal-cookie";
import { AuthProvider } from "./Components/withAuth";
import { PrivateRoute } from "./Components/PrivateRoute";
import AuthButton from "./Components/AuthButton";


// const cookies = new Cookies();

class App extends React.Component {
  //   state = {
  //     isAuthorized: false
  //   };

  //   loginHandler = () => {
  //     if (this.state.isAuthorized) {
  //       cookies.remove("login");
  //     }
  //     this.setState(state => ({
  //       isAuthorized: !state.isAuthorized
  //     }));
  //   };

  render() {
    return (
        <Router>
          <AuthProvider>
          <div>
            <Header
            // isAuthorized={this.state.isAuthorized}
            // loginToggler={this.loginHandler}
            />

            <Switch>
              {/* <Route
              path="/login"
              component={props => (
                <Login {...props} loginHandler={this.loginHandler} />
              )}
              exact
            /> */}
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/login" component={AuthButton}>
              </Route>
              <PrivateRoute path="/about" component={About}></PrivateRoute>
              <Route path="/dishes/:id">
                <Dish />
              </Route>
              <Route path="/dishes">
                <Dishes />
              </Route>
              <Route path="/contacts">
                <ContactUs />
              </Route>
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
          </AuthProvider>
          <Footer />
        </Router>
      
    );
  }
}

export default App;
